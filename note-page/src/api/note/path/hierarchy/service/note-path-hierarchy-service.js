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
 * @property {boolean} [isNotice = false]
 */
import { getTestFolder } from "./repository/folder-repository.js";
import { getTestNote }   from "./repository/note-repository.js";

/**
 * 노트 경로 트리 반환
 * @param params {Object}
 * @param params.userId {string}
 * @returns {Promise<NotePathHierarchy>}
 */
export async function getNoteTree(params) {
	const { userId } = params;

	const { root, folders } = await getTestFolder(userId);
	const rootFolder = folders.find(folder => folder.folderId === root);

	const notes = await getTestNote(userId);

	/** @type {NotePathHierarchy} */
	const tree = {
		id      : rootFolder.folderId,
		parent  : rootFolder.parentFolder,
		name    : rootFolder.folderNm,
		isFolder: true,
		isNotice: false,
	};

	function addLeaves(t) {
		if(t.isFolder) {
			t.children = folders.filter(folder => folder.parentFolder === t.id).map(folder => ({
				id      : folder.folderId,
				parent  : folder.parentFolder,
				name    : folder.folderNm,
				isFolder: true,
				isNotice: false,
			}));
			t.children.forEach(addLeaves);
			t.children.push(...notes.filter(note => note.folder === t.id).map(note => ({
				id      : note.noteId,
				parent  : note.folder,
				name    : note.title,
				isFolder: false,
				isNotice: note.isNotice,
			})));
		}
	}

	addLeaves(tree);

	return tree;
}
