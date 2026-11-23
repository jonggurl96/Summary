import clsx   from "clsx";
import React  from 'react';
import styles from './blocks.module.css';

export default function NoteBlock(props) {

	const {
		/** @type {BlockTypes} */
		blockType,
		/** @type {NoteBlockEditMode} */
		editMode,
		children
	} = props;

	const BLOCK_TYPE = blockType.toUpperCase();

	return (
		<div className={clsx(styles.NoteBlock, editMode === "W" && styles.EditW)}>
			{BLOCK_TYPE === "TEXT" && <TextBlock>{children}</TextBlock>}
		</div>
	);
}

function TextBlock({ children }) {
	return (
		<div className={styles.TextBlock}>{children}</div>
	);
}
