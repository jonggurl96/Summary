import styles                  from 'components/note/block/text/text.module.css';
import { useEffect, useRef }   from "react";
import { useBlockSelectStore } from "stores/note/block/useBlockSelectStore";

/**
 *
 * @param props
 * @param props.text {string}
 * @param [props.style] {React.CSSProperties}
 * @returns {React.JSX.Element}
 * @constructor
 */
export function TextBlock({ id, index, text, style }) {

	const textareaRef = useRef(null);

	const { selectionCaret, editable, focus, focusNext, focusPrev, focusUp, focusDown, changeCaret } = useBlockSelectStore();
	const isFocused = useBlockSelectStore(state => state.isFocused(index));
	const isSelected = useBlockSelectStore(state => state.isSelected(index));

	const selectHandler = e => {
		e.preventDefault();

		/** @type {HTMLTextAreaElement} */
		const textarea = e.target;

		const caret = selectionCaret > text.length ? text.length : selectionCaret;
		textarea.setSelectionRange(caret, caret);
	};

	const keydownHandler = e => {
		if(!isFocused) return;

		/** @type {HTMLTextAreaElement} */
		const textarea = e.target;

		if(e.key === 'ArrowDown') {
			e.preventDefault();
			focusDown();
		}
		else if(e.key === 'ArrowUp') {
			e.preventDefault();
			focusUp();
		}
		else if(e.key === 'ArrowLeft') {
			if(selectionCaret === 0) {
				e.preventDefault();
				focusPrev();
			}
		}
		else if(e.key === 'ArrowRight') {
			if(text.length === selectionCaret) {
				e.preventDefault();
				focusNext();
			}
		}
	};

	useEffect(() => {
		if(isFocused) {
			textareaRef.current.focus();
			if(selectionCaret === -1) {
				changeCaret(text.length);
				return;
			}
			textareaRef.current.setSelectionRange(selectionCaret, selectionCaret);
		}
	}, [isFocused, selectionCaret, textareaRef, text]);

	return (
		<textarea ref={textareaRef} rows={1} id={id} className={styles.TextBlock} placeholder="/를 눌러 블럭을 삽입하세요."
		          autoFocus={true} value={text}
		          style={style}
		          onFocus={() => focus(index)}
			// onSelect={selectHandler}
			        onKeyDown={keydownHandler}
			        disabled={!editable} />
	);
}
