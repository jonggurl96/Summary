import clsx                        from "clsx";
import React, { useRef, useState } from 'react';
import styles                      from "./table.module.css";

export function TableTr({ style, children }) {
	return <div className={styles.Tr} style={style}>{children}</div>;
}

export function TableTh({ style, text, children }) {
	return <TableCell className={styles.Th} text={text} style={style}>{children}</TableCell>;
}

export function TableTd({ autoNewline, style, text, children }) {
	return <TableCell className={clsx(styles.Td, autoNewline && 'auto-newline')} text={text} style={style}>{children}</TableCell>;
}

function TableCell({ className, style, text, children }) {
	return <div className={className} style={style} title={text}>
		<span>{text}</span>
		{children}
	</div>;
}

/** Table Component with caption. */
export function CaptionTable({ children }) {

	const tableRef = useRef(null);

	const [captionInfo, setCaptionInfo] = useState({ show: false, top: 0, right: 0 });

	const showCaption = () => {
		const rect = tableRef.current.getBoundingClientRect();
		setCaptionInfo({ show: true, top: rect.bottom + 5, right: window.innerWidth - rect.right });
	};

	const hideCaption = () => setCaptionInfo({ show: false, top: 0, right: 0 });

	return (
		<>
			<div ref={tableRef} className={styles.Table} onMouseOver={showCaption} onMouseLeave={hideCaption}>{children}</div>
			{captionInfo.show && <div className={styles.TableCaption}><span>테이블캡션</span></div>}
		</>
	);
}
