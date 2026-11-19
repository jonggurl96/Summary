import { getNoteTree }        from "api/note/path/hierarchy/service/note-path-hierarchy-service";
import { createZustandStore } from "stores/createZustandStore";

/** @type {ZustandStore<NotePathHierarchy, {userId: string}>} */
export const useDirectoryStore = createZustandStore(getNoteTree);
