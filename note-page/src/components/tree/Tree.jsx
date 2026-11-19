import React, { useState } from 'react';
import { imgSrc }          from "../../api/asset/route/img";
import styles              from './Tree.module.css';

const NOTE_IMG_SRC = imgSrc("/others/note-icon.svg");

const FOLDER_IMG_SRC = imgSrc("/others/folder-icon.svg");

const FOLDER_CLOSED_IMG_SRC = imgSrc("/others/folder-closed-icon.svg");

export function TreeNode(prop) {
	const {
		/** @type {{ id: string, name: string, children: [] }} */
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
				<img src={folded ? FOLDER_CLOSED_IMG_SRC : FOLDER_IMG_SRC} alt="폴더" className={styles.NodeItemIcon} />
				<span className={styles.NodeName} onClick={() => toggleFolder(depth, !folded)}>{data.name}</span>
			</Item>
			{!folded && (
				data.children.map(child => child.isFolder
					? (<TreeNode key={child.id} data={child} depth={depth + 1} />)
					: (<LeafNode key={child.id} data={child} depth={depth + 1} />)
				)
			)}
		</div>
	);
}

function LeafNode({ data, depth }) {
	return (
		<Item depth={depth}>
			<img src={NOTE_IMG_SRC} alt="노트" className={styles.NodeItemIcon} />
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