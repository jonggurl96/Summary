import { Tree }                       from "components/tree/Tree";
import React, { useEffect, useState } from 'react';
import { useDirectoryStore }          from "stores/note/path/useDirectoryStore";
import { ErrorIconMessage }           from "../../message/with-icon";
import styles                         from './AppLeftSide.module.css';

export default function AppLeftSide() {
	const userId = 'SYSTEM';

	const loadStatus = useDirectoryStore(state => state.status);
	const noteHierarchy = useDirectoryStore(state => state.data);
	const loadError = useDirectoryStore(state => state.error);

	/** @type {({ userId: string }) => void} */
	const fetchData = useDirectoryStore(state => state.fetchData);

	const [leftVisible, setLeftVisible] = useState(true);

	useEffect(() => {
		fetchData({ userId });
	}, [fetchData, userId]);

	return (
		<div className={styles.AppLeftSide} style={{ '--app-left-side-width-px': leftVisible ? 'var(--app-side-width-px)' : '90px' }}>

			<div className={styles.AppLeftSideContentArea}>
				<div className={styles.AppLeftSideHeader} style={{ justifyContent: leftVisible ? 'space-between' : 'center' }}>
					{leftVisible && <h1>파일찾기</h1>}
					<button className={styles.AppLeftSideCloseButton} onClick={() => setLeftVisible(!leftVisible)}></button>
				</div>

				<hr />

				<div className={styles.AppLeftSideBody}>
					{['idle', 'pending'].includes(loadStatus) && "로딩중"}
					{noteHierarchy && (<Tree data={noteHierarchy} minimize={!leftVisible} />)}
					{loadError && <ErrorIconMessage message={loadError} />}
				</div>
			</div>

		</div>
	);
}
