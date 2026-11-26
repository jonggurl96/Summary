import { useEffect, useState } from 'react';

/**
 *
 * @param param0
 * @param param0.editable {boolean}
 * @param param0.editorBlock {React.JSX.Element}
 * @param param0.viewerBlock {React.JSX.Element}
 * @returns {React.JSX.Element}
 * @constructor
 */
export default function EditableBlock({ editable, editorBlock, viewerBlock }) {

	const [selected, setSelected] = useState(false);

	const unselectHandler = e => {
		e.key === 'Escape' && setSelected(false);
	};

	useEffect(() => {
		const action = selected ? document.addEventListener : document.removeEventListener;
		action('keydown', unselectHandler);
		return () => document.removeEventListener('keydown', unselectHandler);
	}, [selected]);

	return (editable && selected) ? <div style={{ backgroundColor: 'transparent' }} onBlur={() => setSelected(false)}>{editorBlock}</div>
		: <div style={{ backgroundColor: 'transparent' }} onClick={() => setSelected(true)}>{viewerBlock}</div>;
}
