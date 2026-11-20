import { imgSrc }          from "api/asset/route/img";
import { motion }          from "framer-motion";
import React, { useState } from 'react';
import styles              from './Tree.module.css';

const NOTE_IMG_SRC = imgSrc("/others/note-icon.svg");

const NOTE_LOCKED_IMG_SRC = imgSrc("/others/note-locked-icon.svg");

const FOLDER_IMG_SRC = imgSrc("/others/folder-icon.svg");

const FOLDER_CLOSED_IMG_SRC = imgSrc("/others/folder-closed-icon.svg");

const FOLDER_LOCKED_IMG_SRC = imgSrc("/others/folder-locked-icon.svg");

export function TreeNode(prop) {
	const {
		/** @type {{ id: string, name: string, isLocked: boolean, children: [] }} */
		data,
		/** @type {number} */
		depth = 0
	} = prop;

	/** @type {useState<boolean>} */
	const [folded, setFolded] = useState(depth !== 0);

	const toggleFolder = (depth, f) => {
		if(depth === 0) setFolded(false);
		else setFolded(f);
	};

	if(data == null)
		return null;

	return (
		<div className={styles.Tree}>
			<Item depth={depth}>
				<img src={folded ? (data.isLocked ? FOLDER_LOCKED_IMG_SRC : FOLDER_CLOSED_IMG_SRC) : FOLDER_IMG_SRC} alt="폴더" className={styles.NodeItemIcon} />
				<span className={styles.NodeName} onClick={() => toggleFolder(depth, !folded)}>{data.name}</span>
			</Item>
			<motion.div className={styles.NodeChildren} initial={{ height: folded ? 'auto' : 0 }} animate={{ height: folded ? 0 : 'auto' }} transition={{ duration: 0.2 }}>
				{!folded && (
					data.children.map(child => child.isFolder
						? (<TreeNode key={child.id} data={child} depth={depth + 1} />)
						: (<LeafNode key={child.id} data={child} depth={depth + 1} />)
					)
				)}
			</motion.div>
		</div>
	);
}

function LeafNode({ data, depth }) {
	return (
		<Item depth={depth}>
			<img src={data.isLocked ? NOTE_LOCKED_IMG_SRC : NOTE_IMG_SRC} alt="노트" className={styles.NodeItemIcon} />
			<span className={styles.NodeName}>{data.name}</span>
		</Item>
	);
}

function Item({ depth, children }) {
	return (
		<div className={styles.Node}>
			{depth > 0 && <div className={styles.NodeIndent}></div>}
			<div className={styles.NodeItem} style={{ '--depth': depth }}>{children}</div>
			<div style={{ width: '20%' }}>buttons</div>
		</div>
	);
}