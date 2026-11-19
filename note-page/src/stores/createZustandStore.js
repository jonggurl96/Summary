import { create } from 'zustand';

/**
 * @template T
 * @template U
 * @param fetchfunction {function(U): Promise<T>}
 * @returns {ZustandStore<T, U>}
 */
export const createZustandStore = fetchfunction => create((set, get) => ({
	status   : 'idle',
	data     : undefined,
	error    : null,
	fetchData: (params) => {
		// 목록 요청이 중복이면 건너뜀
		if(get().status === 'pending') return;

		// 로딩중으로 변경
		set({ status: 'pending', data: undefined, error: null });

		try {
			fetchfunction(params).then(data => {
				set({ status: 'fulfilled', data, error: null });
			});
		} catch(error) {
			set({ status: 'rejected', data: undefined, error: error.message });
		}
	}
}));
