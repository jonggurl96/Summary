import { create } from "zustand";

export const useBlockSelectStore = create((set, get) => ({
	editable      : true,
	selectedIdx   : -1,
	focusIdx      : -1,
	selectionCaret: 0,
	/** @type {function(number)} */
	select: (idx) => set({ selectedIdx: idx }),
	/** @type {function(number)} */
	focus         : (idx) => set({ selectedIdx: idx, focusIdx: idx }),
	changeEditable: (editable) => set({ editable }),
	/** @type {function(number): boolean} */
	isFocused: idx => get().focusIdx === idx && get().selectedIdx === idx,
	/** @type {function(number): boolean} */
	isSelected: idx => get().focusIdx !== idx && get().selectedIdx === idx,
	/** 오른쪽 방향키로 아래 블럭 이동, 캐럿 위치 처음으로 이동 */
	focusNext: () => {
		const idx = get().focusIdx + 1;
		set({ focusIdx: idx, selectedIdx: idx, selectionCaret: 0 });
	},
	/** 아래 방향키로 아래 블럭 이동, 캐럿 위치 이동 없음 */
	focusDown: () => {
		const idx = get().focusIdx + 1;
		set({ focusIdx: idx, selectedIdx: idx });
	},
	/** 왼쪽 방향키로 위 블럭 이동, 캐럿 위치 마지막으로 이동 */
	focusPrev: () => {
		const idx = Math.max(0, get().focusIdx - 1);
		set({ focusIdx: idx, selectedIdx: idx, selectionCaret: -1 });
	},
	/** 위 방향키로 위 블럭 이동, 캐럿 위치 이동 없음 */
	focusUp: () => {
		const idx = Math.max(0, get().focusIdx - 1);
		set({ focusIdx: idx, selectedIdx: idx });
	},
	/** @type {function(number)} */
	changeCaret: caret => set({ selectionCaret: caret })
}));