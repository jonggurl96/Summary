/**
 *
 * @param userId {string}
 * @returns {Promise<EditMode>}
 */
export function getTestEditMode(userId) {

	return {
		userId,
		selected: "RW",
		modes   : [
			{ id: "RW", name: "편집 및 미리보기", iconPath: "/edit/book-write-icon.svg", description: "편집 및 미리보기" },
			{ id: "W", name: "편집", iconPath: "/edit/pen.svg", description: "편집" },
			{ id: "R", name: "조회", iconPath: "/edit/read-book.svg", description: "조회" },
		]
	};
}