import React, { useEffect }  from 'react';
import { useDirectoryStore } from "stores/note/path/useDirectoryStore";
import styles                from './AppLeftSide.module.css';

export default function AppLeftSide({ leftVisible, children }) {
	const userId = 'SYSTEM';

	/** @type {({ userId: string }) => void} */
	const fetchData = useDirectoryStore(state => state.fetchData);

	useEffect(() => {
		fetchData({ userId });
	}, [fetchData, userId]);

	return (
		<div className={styles.AppLeftSide} style={{ '--app-left-side-width-px': leftVisible ? 'var(--app-side-width-px)' : '90px' }}>

			<div className={styles.AppLeftSideContentArea}>
				{children}
			</div>

		</div>
	);
}
