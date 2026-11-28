/**
 * @typedef {NotePathNode & {
 *   [children]: NotePathNode[]
 * }} NotePathHierarchy
 */

/**
 * @typedef {Object} NotePathNode
 * @property {string} id
 * @property {string} parent
 * @property {string} name
 * @property {boolean} isFolder
 * @property {boolean} [isLocked = false]
 */

/**
 * @typedef {Object} Note
 * @property {string} noteId
 * @property {string} folder
 * @property {string} title
 * @property {string} [hashtags = '[]']
 * @property {boolean} [isLocked = false]
 * @property {string} [createdBy = 'SYSTEM']
 * @property {Date} [createdAt = new Date('2026-11-17 17:58:39')]
 * @property {string} [updatedBy = 'SYSTEM']
 * @property {Date} [updatedAt = new Date('2026-11-17 17:58:39')]
 */

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
 * @typedef {"TEXT"|"H1"|"H2"|"H3"|"H4"|"H5"|"H6"|"OL"|"UL"|"TD"|"ACCORDION"|"EMPH"|"COUT"|"INDENT"|"TABLE"|"HR"|"CODE"|"INLINE"} BlockTypes
 * - TEXT: 일반 텍스트 블럭
 * - H1: 제목 수준1 블럭
 * - H2: 제목 수준2 블럭
 * - H3: 제목 수준3 블럭
 * - H4: 제목 수준4 블럭
 * - H5: 제목 수준5 블럭
 * - H6: 제목 수준6 블럭
 * - OL: 순서있는 목록 블럭
 * - UL: 순서없는 목록 블럭
 * - TD: 할 일 목록 블
 * - ACCORDION: 아코디언 블럭
 * - EMPH: 강조 블럭
 * - COUT: 콜아웃 블럭
 * - INDENT: 들여쓰기 블럭
 * - TABLE: 표 블럭
 * - HR: 수평선 블럭
 * - CODE: 코드 블럭
 * - INLINE: 인라인 블럭
 */

/**
 * @typedef {"RW"|"W"|"R"} NoteBlockEditMode
 * - RW: 편집 및 미리보기
 * - W: 편집
 * - R: 조회
 */

/**
 * @typedef {Object} EditMode
 * @property {string} userId
 * @property {NoteBlockEditMode} selected
 * @property {{id: NoteBlockEditMode, name: string, iconPath: string, description: string}[]} modes
 */

/**
 * @typedef {Object} NoteDetail
 * @property {string} noteId
 * @property {string} title
 * @property {string[]} hashtags
 * @property {string} createdBy
 * @property {Date} createdAt
 * @property {string} updatedBy
 * @property {Date} updatedAt
 * @property {NoteBlock[]} blocks
 */

/**
 * @typedef {Object} NoteBlock
 * @property {string} blockId
 * @property {string} parentId
 * @property {string} noteId
 * @property {BlockTypes} blockType
 * @property {number} position
 * @property {string} content
 * @property {number} order
 */

/**
 * @typedef {Object} BlockCommand
 * @property {BlockTypes} blockType 노트 블럭 타입 식별자
 * @property {string} typeDescription 노트 블럭 타입 설명
 * @property {string} shortcut 단축키
 * @property {string} shortcutSample 단축키 예시
 * @property {string} commandEn 영문 명령어
 * @property {string} commandKr 한글 명령어
 */
