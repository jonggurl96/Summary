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
		isLocked : true,
		createdBy: 'SYSTEM',
		createdAt: new Date('2026-11-17 17:58:39'),
		updatedBy: 'SYSTEM',
		updatedAt: new Date('2026-11-17 17:58:39'),
	}];
}
