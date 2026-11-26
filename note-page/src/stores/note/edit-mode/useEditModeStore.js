import { getNoteEditModes }  from "api/note/service/note-service";
import { createCommonStore } from "stores/createZustandStore";

/** @type {ZustandStore<string, EditMode>} */
export const useEditModeStore = createCommonStore(getNoteEditModes, {
	isEditable: (_set, get) => () => {
		if(['idle', 'pending'].includes(get().status)) return false;
		if(get().error) return false;
		const data = get().data;
		if(data) {
			return data.selected !== "R";
		}
		return false;
	}
});
