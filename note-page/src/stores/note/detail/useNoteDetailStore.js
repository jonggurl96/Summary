import { getNoteDetails }    from "api/note/service/note-service";
import { createCommonStore } from "stores/createCommonStore";

/**
 *
 * @type {ZustandStore<string, NoteDetail>}
 */
export const useNoteDetailStore = createCommonStore(getNoteDetails);