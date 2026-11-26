import { getNoteTree }       from "api/note/service/note-service";
import { createCommonStore } from "stores/createCommonStore";

/** @type {ZustandStore<{userId: string}, NotePathHierarchy>} */
export const useDirectoryStore = createCommonStore(getNoteTree);
