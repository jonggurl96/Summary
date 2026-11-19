import { TreeNode }          from "components/tree/Tree";
import React, { useEffect }  from 'react';
import { useDirectoryStore } from "stores/note/path/useDirectoryStore";
import styles                from './AppLeftSide.module.css';

export default function AppLeftSide() {
	const userId = 'SYSTEM';

	const loadStatus = useDirectoryStore(state => state.status);
	const noteHierarchy = useDirectoryStore(state => state.data);
	const loadError = useDirectoryStore(state => state.error);

	/** @type {({ userId: string }) => void} */
	const fetchData = useDirectoryStore(state => state.fetchData);


	useEffect(() => {
		fetchData({ userId });
	}, [fetchData, userId]);

	return (
		<div className={styles.AppLeftSide}>
			<div className={styles.AppLeftSideContentArea}>
				<div className={styles.AppLeftSideHeader}>
					<h1>파일찾기</h1>
					<button className={styles.AppLeftSideCloseButton}></button>
				</div>

				<hr />

				<div className={styles.AppLeftSideBody}>
					{['idle', 'pending'].includes(loadStatus) && "로딩중"}
					{noteHierarchy && (<TreeNode data={noteHierarchy} />)}
					{loadError && <p>에러발생</p>}
				</div>
			</div>
		</div>
	);
}
