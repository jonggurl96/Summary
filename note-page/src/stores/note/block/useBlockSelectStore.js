import { create } from "zustand";

export const useBlockSelectStore = create((set, get) => ({
	selectedBlocks: /** @type {string[]} */ [],
	focusBlock    : /** @type {string} */ null,
	logicalCaret  : -1,
	visibleCaret  : 0,

	/** @type {function()} */
	resetSelection: () => set({ selectedBlocks: [] }),

	/** @type {function(string)} */
	addSelection: blockId => {
		const idx = get().selectedBlocks.indexOf(blockId);
		if(idx === -1)
			set({ selectedBlocks: [...get().selectedBlocks, blockId] });
		else
			set({ selectedBlocks: [...get().selectedBlocks.filter((_, index) => index !== idx)] });
	},

	/** @type {function(string|null)} */
	focus: blockId => set({ focusBlock: blockId }),

	/**
	 * @param blockId {string} focus block id
	 * @param caret {number} (Logical) 0 if first caret, -1 if last caret
	 */
	focusBesideBlock: (blockId, caret) => set({ focusBlock: blockId, logicalCaret: caret }),

	/** @type {function(number)} */
	moveCaret: (caret) => set({ logicalCaret: caret, visibleCaret: caret }),

}));