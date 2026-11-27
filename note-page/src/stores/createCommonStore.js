import { create } from 'zustand';


/**
 * fetch function과 dispatch function들을 파라미터로, 공통 타입 store 제공
 * @template T fetchData 파라미터 타입
 * @template R data 타입
 * @param fetchFunction {function(T): Promise<R>}
 * @param [dispatchFunction = {}] {Object<string, function(set, get): function(*): *>}
 * @returns {ZustandStore<T, R>}
 */
export const createCommonStore = (fetchFunction, dispatchFunction = {}) => create((set, get) => ({
	/** @type {ZustandApiStatus} */
	status   : 'idle',
	data     : undefined,
	error    : null,
	isIdle   : () => get().status === "idle",
	isLoading: () => get().status === "pending",
	isLoaded : () => get().status === "fulfilled",
	fetchData: (params) => {
		// 목록 요청이 중복이면 건너뜀
		if(get().status === 'pending') return;

		// 로딩중으로 변경
		set({ status: 'pending', data: undefined, error: null });

		try {
			fetchFunction(params).then(data => {
				set({ status: 'fulfilled', data, error: null });
			});
		} catch(error) {
			set({ status: 'rejected', data: undefined, error: error.message });
		}
	},
	dispatch : (data) => {
		if(get().status !== 'fulfilled')
			throw new Error('dispatchData는 fulfilled 상태에서만 사용할 수 있습니다.');
		set({ data });
	},
	...Object.fromEntries(Object.entries(dispatchFunction).map(([nm, fn]) => ([nm, fn(set, get)])))
}));
