/**
 * @template T fetchData parameter type
 * @template R data type
 * @param {ZustandStore<T, R>} store
 * @returns {CommonStore<T, R>}
 */
export const useCommonStore = store => ({
	status   : store(state => state.status),
	data     : store(state => state.data),
	error    : store(state => state.error),
	isIdle   : store(state => state.isIdle()),
	isLoading: store(state => state.isLoading()),
	fetchData: store(state => state.fetchData),
	dispatch : store(state => state.dispatch),
});
