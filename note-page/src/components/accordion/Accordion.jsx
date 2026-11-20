import React, { useState } from 'react';
import { imgSrc }          from "../../api/asset/route/img";
import styles              from './Accordion.module.css';

const ACCORDION_UP = imgSrc("/arrows/accordion_up.svg");

const ACCORDION_DOWN = imgSrc("/arrows/accordion_down.svg");

export default function Accordion({ title, children }) {

	const [folded, setFolded] = useState(false);

	return (
		<div className={styles.Accordion} onClick={() => setFolded(!folded)}>
			<div className={styles.AccordionHeader}>
				<h1>{title}</h1>
				<img src={folded ? ACCORDION_DOWN : ACCORDION_UP} alt={folded ? "아코디언 열기" : "아코디언 닫기"} className={styles.AccordionArrow} />
			</div>
		</div>
	);
}
