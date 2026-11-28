import styles                  from 'components/note/block/text/text.module.css';
import { useEffect, useRef }   from "react";
import { useBlockSelectStore } from "stores/note/block/useBlockSelectStore";
import { useNoteDetailStore }  from "stores/note/detail/useNoteDetailStore";

/**
 *
 * @param props
 * @param props.id {string}
 * @param props.text {string}
 * @param props.editable {boolean}
 * @param props.style {React.CSSProperties}
 * @param props.order {number}
 * @returns {React.JSX.Element}
 * @constructor
 */
export function TextBlock({ id, text, editable, style, order }) {

	const textareaRef = useRef(null);

	const {
		getPreviousBlockId,
		getNextBlockId
	} = useNoteDetailStore();

	const {
		logicalCaret,
		visibleCaret,
		focusBesideBlock,
		focusBlock,
		moveCaret,
		focus
	} = useBlockSelectStore();

	const isFocused = focusBlock === id;

	const selectHandler = e => {
		if(!isFocused) return;
		if(e.target.selectionStart === e.target.selectionEnd) {

			moveCaret(e.target.selectionEnd);
		}
	};

	const keydownHandler = e => {
		if(!isFocused) return;

		const { selectionStart, selectionEnd } = e.target;
		if(selectionStart !== selectionEnd) return;

		if(e.key === 'ArrowDown') {
			e.preventDefault();
			const nextBlockId = getNextBlockId(order);
			console.log(nextBlockId);
			focusBesideBlock(nextBlockId, selectionEnd);
		}
		else if(e.key === 'ArrowUp') {
			e.preventDefault();
			const prevBlockId = getPreviousBlockId(order);
			focusBesideBlock(prevBlockId, selectionEnd);
		}
		else if(['ArrowLeft', 'Backspace'].includes(e.key) && visibleCaret === 0) {
			e.preventDefault();
			const prevBlockId = getPreviousBlockId(order);
			console.log(prevBlockId);
			focusBesideBlock(prevBlockId, -1);
		}
		else if(e.key === 'ArrowRight' && text.length === visibleCaret) {
			e.preventDefault();
			const nextBlockId = getNextBlockId(order);
			console.log(nextBlockId);
			focusBesideBlock(nextBlockId, 0);
		}

	};

	useEffect(() => {
		if(isFocused) {
			const caret = logicalCaret === -1 ? text.length : visibleCaret;
			textareaRef.current.setSelectionRange(caret, caret);
			textareaRef.current.focus();
		}
	}, [isFocused, textareaRef, logicalCaret, visibleCaret, text]);

	const focusHandler = e => {
		focus(id);
		const { selectionStart, selectionEnd } = e.target;
		if(selectionStart === selectionEnd) {
			moveCaret(e.target.selectionStart);
		}
	};

	return (
		<textarea ref={textareaRef} rows={1} id={id} className={styles.TextBlock} placeholder="/를 눌러 블럭을 삽입하세요."
		          autoFocus={true} value={text}
		          style={style}
		          onFocus={focusHandler}
		          onSelect={selectHandler}
		          onKeyDown={keydownHandler}
		          onChange={() => {}}
		          disabled={!editable} />
	);
}
