import { getNoteEditModes }  from "api/note/service/note-service";
import { createCommonStore } from "stores/createZustandStore";

/** @type {ZustandStore<string, EditMode>} */
export const useEditModeStore = createCommonStore(getNoteEditModes);
