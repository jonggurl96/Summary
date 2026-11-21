import React  from 'react';
import styles from './AppRightSide.module.css';

export default function AppRightSide({ children }) {
	return (
		<div className={styles.AppRightSide}>
			<div className={styles.AppRightSide}>
				{children}
			</div>
		</div>
	);
}
