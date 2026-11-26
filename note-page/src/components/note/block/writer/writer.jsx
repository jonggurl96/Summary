import React from 'react';


export function WriterBlock(props) {
	const { id, data, editable, focus, changeFocus, children } = props;
	return (<div><span>{children}</span></div>);
}