import clsx          from "clsx";
import EditableBlock from "components/note/block/editable/EditableBlock";
import styles        from 'components/note/block/text/text.module.css';
import { useState }  from "react";

/**
 *
 * @param props
 * @param props.text {string}
 * @param props.editable {boolean}
 * @returns {React.JSX.Element}
 * @constructor
 */
export function TextBlock({ id, text, editable }) {

	const [textVal, setTextVal] = useState(text);

	return (
		<EditableBlock editable={editable}
		               viewerBlock={<span className={styles.TextBlockNotEditable}>{textVal}</span>}
		               editorBlock={<InputTextBlock id={id} editable={editable} textVal={textVal} setTextVal={setTextVal} />} />
	);
}

export function InputTextBlock({ id, editable, textVal, setTextVal }) {
	return (
		<textarea rows={1}
		          id={id}
		          className={styles.TextBlock} placeholder="/를 눌러 블럭을 삽입하세요."
		          value={textVal}
		          onChange={e => setTextVal(e.target.value)}
		          autoFocus={true}
		          disabled={!editable} />
	);
}

/**
 *
 * @param props
 * @param props.cssStyle {string} TailwindCSS style class name
 * @param props.children
 * @returns {React.JSX.Element}
 * @constructor
 */
function InlineText({ cssStyle, children }) {
	return (
		<span className={clsx(styles.TextBlock, cssStyle)}>{children}</span>
	);
}