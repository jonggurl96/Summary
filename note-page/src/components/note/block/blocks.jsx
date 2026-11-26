import { imgSrc }                  from "api/asset/route/img";
import clsx                        from "clsx";
import styles                      from 'components/note/block/blocks.module.css';
import { H1, H2, H3, H4, H5, H6 }  from "components/note/block/heading/headings";
import { TextBlock }               from "components/note/block/text/text";
import React, { useRef, useState } from 'react';

export default function NoteBlock(props) {

	const {
		id,
		/** @type {BlockTypes} */
		blockType,

		/** @type {boolean} */
		editable,

		children
	} = props;

	const blockRef = useRef(null);

	const BLOCK_TYPE = blockType.toUpperCase();

	const [hoverOnBlock, setHoverOnBlock] = useState(false);

	const showHandle = () => {
		if(!editable) return;
		setHoverOnBlock(true);
	};

	const [hoverOnCommentArea, setHoverOnCommentArea] = useState(false);

	return (
		<div ref={blockRef} className={clsx(styles.NoteBlock, styles.Editable)} onMouseOver={showHandle} onMouseLeave={() => setHoverOnBlock(false)}>
			{/* 버튼 영역 */}
			<div className={styles.HandleArea}>
				<InsertBlockButton visible={hoverOnBlock && editable} />
				<BlockHandle visible={hoverOnBlock && editable} />
			</div>

			{/* 블럭 영역 */}
			<div className={styles.BlockWrapper}>
				{BLOCK_TYPE === "TEXT" && <TextBlock id={id} text={children.toString()} editable={editable} />}
				{BLOCK_TYPE === "H1" && <H1>{children}</H1>}
				{BLOCK_TYPE === "H2" && <H2>{children}</H2>}
				{BLOCK_TYPE === "H3" && <H3>{children}</H3>}
				{BLOCK_TYPE === "H4" && <H4>{children}</H4>}
				{BLOCK_TYPE === "H5" && <H5>{children}</H5>}
				{BLOCK_TYPE === "H6" && <H6>{children}</H6>}
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
