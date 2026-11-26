import { imgSrc }         from "api/asset/route/img";
import EditableBlock      from "components/note/block/editable/EditableBlock";
import styles             from "components/note/block/heading/headings.module.css";
import { InputTextBlock } from "components/note/block/text/text";
import { useState }       from "react";

export function H1({ editable, focus, children }) {
	return (
		<HeadingWrapper cnt={1} editable={editable} focus={focus} headingText={children}>
			<h1 className={styles.Heading}>{children}</h1>
		</HeadingWrapper>
	);
}

export function H2({ editable, focus, children }) {
	return (
		<HeadingWrapper cnt={2} editable={editable} focus={focus} headingText={children}>
			<h2 className={styles.Heading}>{children}</h2>
		</HeadingWrapper>
	);
}

export function H3({ editable, focus, children }) {
	return (
		<HeadingWrapper cnt={3} editable={editable} focus={focus} headingText={children}>
			<h3 className={styles.Heading}>{children}</h3>
		</HeadingWrapper>
	);
}

export function H4({ editable, focus, children }) {
	return (
		<HeadingWrapper cnt={4} editable={editable} focus={focus} headingText={children}>
			<h4 className={styles.Heading}>{children}</h4>
		</HeadingWrapper>
	);
}

export function H5({ editable, focus, children }) {
	return (
		<HeadingWrapper cnt={5} editable={editable} focus={focus} headingText={children}>
			<h5 className={styles.Heading}>{children}</h5>
		</HeadingWrapper>
	);
}

export function H6({ editable, focus, children }) {
	return (
		<HeadingWrapper cnt={6} editable={editable} focus={focus} headingText={children}>
			<h6 className={styles.Heading}>{children}</h6>
		</HeadingWrapper>
	);
}

function HeadingWrapper({ cnt, editable, focus, headingText, children }) {

	const [folded, setFolded] = useState(false);

	const initialText = `${'#'.repeat(cnt)} ${headingText}`;

	const [textVal, setTextVal] = useState(initialText);

	return (
		<EditableBlock editable={editable && focus}
		               editorBlock={<InputTextBlock id={initialText} editable={editable} textVal={textVal} setTextVal={setTextVal} />}
		               viewerBlock={(
			               <div className={styles.HeadingWrapper}>
											<div className={styles.HeadingIconWrapper} onClick={() => setFolded(!folded)}>
												<div className={styles.HeadingIcon} style={{
													backgroundImage: `url(${imgSrc("/arrows/accordion_arrow.svg")})`,
													transform      : folded ? "rotateX(0deg)" : "rotateX(180deg)"
												}}></div>
											</div>
											<div className={styles.HeadingContentWrapper}>
												<div className={styles.HeadingTagWrapper}>{children}</div>
											</div>
										</div>
		               )} />
	);
}