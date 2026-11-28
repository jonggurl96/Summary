import { getNoteDetails }    from "api/note/service/note-service";
import { createCommonStore } from "stores/createCommonStore";

/**
 *
 * @type {ZustandStore<string, NoteDetail>}
 */
export const useNoteDetailStore = createCommonStore(getNoteDetails, {
	/** @returns {function(): number} */
	getBlockLength: (_set, get) => () => get().data.blocks.length,
	/** @returns {function(number): string|null} */
	getPreviousBlockId: (_set, get) => (order) => {
		if(order === 1) return null;
		else return get().data.blocks.find(block => block.order === order - 1)?.blockId;
	},
	/** @returns {function(number): string|null} */
	getNextBlockId: (_set, get) => (order) => {
		if(order === get().data.blocks.length) return null;
		else return get().data.blocks.find(block => block.order === order + 1)?.blockId;
	}
});