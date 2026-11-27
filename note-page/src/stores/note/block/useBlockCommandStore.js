import { getNoteBlockCommands } from "api/note/service/note-service";
import { createCommonStore }    from "stores/createCommonStore";

/** @type {ZustandStore<void, BlockCommand[]>} */
export const useBlockCommandStore = createCommonStore(getNoteBlockCommands, {
	/** @returns {function(BlockTypes): BlockCommand} */
	findCommand: (_set, get) => blockType => get().data.find(command => command.blockType === blockType)
});