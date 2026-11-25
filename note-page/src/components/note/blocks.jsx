import { imgSrc }                  from "api/asset/route/img";
import clsx                        from "clsx";
import React, { useRef, useState } from 'react';
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

	const showHandle = () => {
		if(!editable) return;
		setHoverOnBlock(true);
	};

	const editable = ["RW", "W"].includes(editMode);

	const [hoverOnCommentArea, setHoverOnCommentArea] = useState(false);

	return (
		<div ref={blockRef} className={clsx(styles.NoteBlock)} onMouseOver={showHandle} onMouseLeave={() => setHoverOnBlock(false)}>
			{/* 버튼 영역 */}
			<div className={styles.HandleArea}>
				<InsertBlockButton visible={hoverOnBlock && editable} />
				<BlockHandle visible={hoverOnBlock && editable} />
			</div>

			{/* 블럭 영역 */}
			<div className={styles.BlockWrapper}>
				{BLOCK_TYPE === "TEXT" && <TextBlock>{children}</TextBlock>}
			</div>

			{/* 답글 영역 */}
			<div className={styles.CommentButtonArea} onMouseOver={() => setHoverOnCommentArea(true)} onMouseLeave={() => setHoverOnCommentArea(false)}>
				{hoverOnCommentArea && <div className={clsx(styles.BlockButton, styles.BlockButtonWrapper)}
				                            style={{ backgroundImage: `url(${imgSrc("/balloons/balloon_plus_i.svg")})` }}
				                            title="댓글"></div>}
			</div>
		</div>
	);
}

function InsertBlockButton({ visible, ...rest }) {
	return (
		<div className={styles.BlockButtonWrapper} {...rest}>
			{visible && <div className={styles.BlockButton} style={{ backgroundImage: `url(${imgSrc("/plus/plus_i.svg")})` }}></div>}
		</div>
	);
}

function BlockHandle({ visible, ...rest }) {
	return (
		<div className={styles.BlockButtonWrapper} {...rest}>
			{visible && <div className={styles.BlockButton} style={{ backgroundImage: `url(${imgSrc("/menu/hv-23.svg")})` }}></div>}
		</div>
	);
}

function TextBlock({ children }) {
	return (
		<div className={styles.TextBlock}>{children}</div>
	);
}
