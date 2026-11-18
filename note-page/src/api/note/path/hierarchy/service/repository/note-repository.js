/**
 * @typedef {Object} Note
 * @property {string} noteId
 * @property {string} folder
 * @property {string} title
 * @property {string} [hashtags = '[]']
 * @property {boolean} [isNotice = false]
 * @property {string} [createdBy = 'SYSTEM']
 * @property {Date} [createdAt = new Date('2026-11-17 17:58:39')]
 * @property {string} [updatedBy = 'SYSTEM']
 * @property {Date} [updatedAt = new Date('2026-11-17 17:58:39')]
 */

/**
 * 최상위 폴더에 위치한 가상의 노트 반환
 * @param {string} _userId
 * @returns {Note[]}
 */
export async function getTestNote(_userId) {
	return [{
		noteId   : 'NOTICE-0000000000001',
		folder   : 'ROOT',
		title    : '공지사항 테스트',
		hashtags : '["공지사항", "테스트"]',
		isNotice : true,
		createdBy: 'SYSTEM',
		createdAt: new Date('2026-11-17 17:58:39'),
		updatedBy: 'SYSTEM',
		updatedAt: new Date('2026-11-17 17:58:39'),
	}];
}
