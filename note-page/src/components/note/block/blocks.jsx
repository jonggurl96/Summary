import { imgSrc }                  from "api/asset/route/img";
import clsx                        from "clsx";
import styles                      from 'components/note/block/blocks.module.css';
import { TextBlock }               from "components/note/block/text/text";
import React, { useRef, useState } from 'react';
import { useBlockSelectStore }     from "stores/note/block/useBlockSelectStore";
import { useEditModeStore }        from "stores/note/edit-mode/useEditModeStore";

/**
 *
 * @param props
 * @param props.index {number}
 * @param props.data {NoteBlock}
 * @param props.setData {function(NoteBlock)}
 */
export default function NoteBlock(props) {

	const {
		index, data, setData
	} = props;

	const blockRef = useRef(null);

	const BLOCK_TYPE = data.blockType.toUpperCase();

	const [hoverOnBlock, setHoverOnBlock] = useState(false);

	const showHandle = () => {
		if(!editable) return;
		setHoverOnBlock(true);
	};

	const [hoverOnCommentArea, setHoverOnCommentArea] = useState(false);

	const { focusBlock, selectedBlocks } = useBlockSelectStore();

	const isSelected = selectedBlocks.includes(data.blockId);

	const focused = data.blockId === focusBlock;

	const editable = useEditModeStore(state => state.isEditable());

	return (
		<div ref={blockRef} className={styles.NoteBlock} onMouseOver={showHandle} onMouseLeave={() => setHoverOnBlock(false)}>
			{/* 버튼 영역 */}
			<div className={styles.HandleArea}>
				<InsertBlockButton visible={hoverOnBlock && editable} />
				<BlockHandle visible={hoverOnBlock && editable} onClick={() => {}} />
			</div>

			{/* 블럭 영역 */}
			<div className={styles.BlockWrapper}>
				{/*{BLOCK_TYPE === "TEXT" && <TextBlock id={id} text={children.toString()} editable={editable} focus={focus} />}*/}
				{/*{BLOCK_TYPE === "H1" && <H1 editable={editable} focus={focus}>{children}</H1>}*/}
				{/*{BLOCK_TYPE === "H2" && <H2 editable={editable} focus={focus}>{children}</H2>}*/}
				{/*{BLOCK_TYPE === "H3" && <H3 editable={editable} focus={focus}>{children}</H3>}*/}
				{/*{BLOCK_TYPE === "H4" && <H4 editable={editable} focus={focus}>{children}</H4>}*/}
				{/*{BLOCK_TYPE === "H5" && <H5 editable={editable} focus={focus}>{children}</H5>}*/}
				{/*{BLOCK_TYPE === "H6" && <H6 editable={editable} focus={focus}>{children}</H6>}*/}
				<TextBlock id={data.blockId} text={data.content} editable={editable} order={data.order} />
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

function BlockHandle({ visible, onClick, ...rest }) {
	return (
		<div className={styles.BlockButtonWrapper} onClick={onClick} {...rest}>
			{visible && <div className={styles.BlockButton} style={{ backgroundImage: `url(${imgSrc("/menu/hv-23.svg")})` }}></div>}
		</div>
	);
}
