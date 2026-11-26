import styles from "components/note/block/heading/headings.module.css";

export function H1({ children }) {
	return (
		<h1 className={styles.Heading}>{children}</h1>
	);
}

export function H2({ children }) {
	return (
		<h2 className={styles.Heading}>{children}</h2>
	);
}

export function H3({ children }) {
	return (
		<h3 className={styles.Heading}>{children}</h3>
	);
}

export function H4({ children }) {
	return (
		<h4 className={styles.Heading}>{children}</h4>
	);
}

export function H5({ children }) {
	return (
		<h5 className={styles.Heading}>{children}</h5>
	);
}

export function H6({ children }) {
	return (
		<h6 className={styles.Heading}>{children}</h6>
	);
}