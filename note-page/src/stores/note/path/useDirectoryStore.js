import { getNoteTree }       from "api/note/service/note-service";
import { createCommonStore } from "stores/createZustandStore";

/** @type {ZustandStore<{userId: string}, NotePathHierarchy>} */
export const useDirectoryStore = createCommonStore(getNoteTree);
