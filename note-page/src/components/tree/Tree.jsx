import { imgSrc }                   from "api/asset/route/img";
import clsx                         from "clsx";
import { motion }                   from "framer-motion";
import React, { useRef, useState }  from 'react';
import { WarningNone }              from "../message/with-icon";
import { Tooltip, tooltipDuration } from "../tooltip/tooltip";
import styles                       from './Tree.module.css';

const NOTE_IMG_SRC = imgSrc("/others/note-icon.svg");

const NOTE_LOCKED_IMG_SRC = imgSrc("/others/note-locked-icon.svg");

const FOLDER_IMG_SRC = imgSrc("/others/folder-icon.svg");

const FOLDER_CLOSED_IMG_SRC = imgSrc("/others/folder-closed-icon.svg");

const FOLDER_LOCKED_IMG_SRC = imgSrc("/others/folder-locked-icon.svg");

export function Tree(prop) {
	const {
		/** @type {{ id: string, name: string, isLocked: boolean, children: [] }} */
		data,
		/** @type {number} */
		depth = 0,
		/** @type {boolean} */
		minimize,
		/** @type {function(string, "NOTE"|"FOLDER")} */
		onClick
	} = prop;

	if(data == null)
		return <WarningNone message="폴더 및 노트가 존재하지 않습니다." />;

	return (
		<div className={styles.Tree}>
			<Folder data={data} depth={depth} minimize={minimize} path={data.name} onClick={onClick} />
		</div>
	);
}

function Folder({ data, depth, minimize, path, onClick }) {
	const [folded, setFolded] = useState(depth !== 0);

	const toggleFolder = (depth, f) => {
		if(depth === 0) setFolded(false);
		else setFolded(f);
	};

	const folderIcon = folded ? (data.isLocked ? FOLDER_LOCKED_IMG_SRC : FOLDER_CLOSED_IMG_SRC) : FOLDER_IMG_SRC;

	return (
		<>
			<Item alt="폴더" depth={depth} iconSrc={folderIcon} minimize={minimize} name={data.name} path={path} onClick={() => toggleFolder(depth, !folded)} />
			<motion.div className={styles.NodeChildren} initial={{ height: folded ? 'auto' : 0 }} animate={{ height: folded ? 0 : 'auto' }} transition={{ duration: 0.2 }}>
				{!folded && (
					data.children.map(child => child.isFolder
						? (<Folder key={child.id} data={child} depth={depth + 1} minimize={minimize} path={`${path}/${child.name}`} onClick={onClick} />)
						: (<Note key={child.id} data={child} depth={depth + 1} minimize={minimize} path={`${path}/${child.name}`} onClick={onClick} />)
					)
				)}
			</motion.div>
		</>
	);
}

function Note({ data, depth, minimize, path, onClick }) {

	const noteIcon = data.isLocked ? NOTE_LOCKED_IMG_SRC : NOTE_IMG_SRC;

	return (
		<Item alt="노트" depth={depth} iconSrc={noteIcon} minimize={minimize} name={data.name} path={path} onClick={() => onClick(data.id, "NOTE")} />
	);
}

function Item({ alt, depth, iconSrc, minimize, name, path, onClick }) {

	const itemRef = useRef(null);

	const [tooltipInfo, setTooltipInfo] = useState({
		open  : false,
		top   : 0,
		left  : 0,
		height: 0
	});

	const closeTooltip = () => {
		setTooltipInfo({ ...tooltipInfo, open: false });
	};

	const openTooltip = () => {
		if(!minimize) return;
		const rect = itemRef.current.getBoundingClientRect();
		setTooltipInfo({ open: true, top: rect.top, left: rect.right + 10, height: rect.height });
	};

	return (
		<React.Fragment>
			<div ref={itemRef} className={styles.Node} style={{ justifyContent: minimize ? 'center' : 'flex-end' }}
			     onMouseOver={openTooltip} onMouseLeave={closeTooltip}>

				{(depth > 0 && !minimize) && <div className={styles.NodeIndent}></div>}
				<div className={clsx(styles.NodeItem, minimize && styles.MinimizeNodeItem)} style={{ '--depth': depth }}>
					<img src={iconSrc} alt={alt} className={styles.NodeItemIcon} onClick={onClick} />
					{!minimize && <span className={styles.NodeName} onClick={onClick}>{name}</span>}
				</div>
				{!minimize && (<div style={{ width: '20%' }}>buttons</div>)}

				{tooltipInfo.open && (
					<Tooltip top={tooltipInfo.top} left={tooltipInfo.left}>
						<motion.div className={styles.NodeTooltip}
						            initial={{ width: 0, height: tooltipInfo.height }}
						            animate={{ width: 'auto' }}
						            transition={{ duration: tooltipDuration }}>
							<span>{path.replace(/\/\//g, "/")}</span>
						</motion.div>
					</Tooltip>
				)}

			</div>
		</React.Fragment>
	);
}