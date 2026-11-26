import { getTestEditMode }              from "../repository/edit-mode-repository";
import { getTestFolder }                from "../repository/folder-repository.js";
import { getTestNote, getTestNoteData } from "../repository/note-repository.js";

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
		isLocked: false,
	};

	function addLeaves(t) {
		if(t.isFolder) {
			t.children = folders.filter(folder => folder.parentFolder === t.id).map(folder => ({
				id      : folder.folderId,
				parent  : folder.parentFolder,
				name    : folder.folderNm,
				isFolder: true,
				isLocked: false,
			}));
			t.children.forEach(addLeaves);
			t.children.push(...notes.filter(note => note.folder === t.id).map(note => ({
				id      : note.noteId,
				parent  : note.folder,
				name    : note.title,
				isFolder: false,
				isLocked: note.isLocked,
			})));
		}
	}

	addLeaves(tree);

	return tree;
}

/**
 * 노트 편집모드 반환
 * @param userId {string}
 * @returns {Promise<EditMode>}
 */
export async function getNoteEditModes(userId) {
	return await getTestEditMode(userId);
}

/**
 * 노트 내용 반환
 * @param noteId {string}
 * @returns {Promise<NoteDetail>}
 */
export async function getNoteDetails(noteId) {
	return await getTestNoteData(noteId);
}
