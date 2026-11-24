import clsx                        from "clsx";
import React, { useRef, useState } from 'react';
import { createPortal }            from "react-dom";
import styles                      from './blocks.module.css';

export default function NoteBlock(props) {

	const {
		/** @type {BlockTypes} */
		blockType,

		/** @type {NoteBlockEditMode} */
		editMode,

		children
	} = props;

	const blockRef = useRef(null);

	const BLOCK_TYPE = blockType.toUpperCase();

	const [hoverOnBlock, setHoverOnBlock] = useState(false);

	const [rect, setRect] = useState({ top: 0, left: 0 });

	const showHandle = () => {
		if(!editable) return;
		setHoverOnBlock(true);
		const { top, left } = blockRef.current.getBoundingClientRect();
		setRect({ top: top + 5, left: left - 33 });
	};

	const editable = ["RW", "W"].includes(editMode);

	return (
		<div ref={blockRef} className={clsx(styles.NoteBlock, editable && styles.Editable)} onMouseOver={showHandle}>
			{hoverOnBlock && editable && createPortal(<BlockHandle rect={rect} />, document.body)}
			{/* create portal이 아니라 overflow랑 등등 연계해서 만들기 */}
			<div className={styles.BlockWrapper}>
				{BLOCK_TYPE === "TEXT" && <TextBlock>{children}</TextBlock>}
			</div>
		</div>
	);
}

function BlockHandle({ rect }) {
	return (
		<div className={styles.BlockHandle} style={{ ...rect }}>
			<div className={styles.Handle}></div>
		</div>
	);
}

function TextBlock({ children }) {
	return (
		<div className={styles.TextBlock}>{children}</div>
	);
}
