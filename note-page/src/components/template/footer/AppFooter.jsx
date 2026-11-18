import React  from 'react';
import styles from './AppFooter.module.css';

export default function AppFooter({ children }) {
	return (
		<div className={styles.AppFooter}>
			{children}
		</div>
	);
}
