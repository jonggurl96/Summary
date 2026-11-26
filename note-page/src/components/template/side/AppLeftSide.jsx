import React, { useEffect }  from 'react';
import { useDirectoryStore } from "stores/note/path/useDirectoryStore";
import { useCommonStore }    from "stores/useCommonStore";
import styles                from './AppLeftSide.module.css';

export default function AppLeftSide({ leftVisible, userId, children }) {

	const { fetchData, isIdle } = useCommonStore(useDirectoryStore);

	useEffect(() => {
		if(isIdle)
			fetchData({ userId });
	}, [fetchData, isIdle, userId]);

	return (
		<div className={styles.AppLeftSide} style={{ '--app-left-side-width-px': leftVisible ? 'var(--app-side-width-px)' : '90px' }}>

			<div className={styles.AppLeftSideContentArea}>
				{children}
			</div>

		</div>
	);
}
