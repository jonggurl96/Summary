import { getNoteTree }                from "api/note/path/hierarchy/service/note-path-hierarchy-service";
import React, { useEffect, useState } from 'react';
import styles                         from './AppLeftSide.module.css';

export default function AppLeftSide() {
	const userId = 'SYSTEM';

	/** @type {import('react').useState<NoteHierarchy | null>} */
	const [noteHierarchy, setNoteHierarchy] = useState(null);

	useEffect(() => {
		getNoteTree({ userId }).then(setNoteHierarchy);
	}, [userId]);

	return (
		<div className={styles.AppLeftSide}>
			<div className={styles.AppLeftSideContentArea}>
				<div className={styles.AppLeftSideHeader}>
					<h1>파일찾기</h1>
					<button className={styles.AppLeftSideCloseButton}>button</button>
				</div>
			</div>
		</div>
	);
}
