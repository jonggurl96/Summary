/**
 * DB 생성 전, 최상위 폴더 하나 반환
 * @param {string} _userId
 * @returns {{ root: string, folders: NoteFolder[] }}
 */
export async function getTestFolder(_userId) {
	return {
		root   : 'ROOT',
		folders: [{
			folderId    : 'ROOT',
			parentFolder: '',
			folderNm    : '/',
			isLocked    : false,
			password    : '',
			createdBy   : 'SYSTEM',
			createdAt   : new Date('2026-11-17 17:58:39'),
			updatedBy   : 'SYSTEM',
			updatedAt   : new Date('2026-11-17 17:58:39'),
		}]
	};
}