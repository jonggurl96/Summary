/**
 * @typedef {Object} NoteFolder
 * @property {string} folderId
 * @property {string} [parentFolder = '']
 * @property {string} [folderNm = '']
 * @property {boolean} [isLocked = false]
 * @property {string} [password = '']
 * @property {string} [createdBy = 'SYSTEM']
 * @property {Date} [createdAt = new Date('2026-11-17 17:58:39')]
 * @property {string} [updatedBy = 'SYSTEM']
 * @property {Date} [updatedAt = new Date('2026-11-17 17:58:39')]
 */

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