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