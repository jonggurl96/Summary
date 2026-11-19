/**
 * - idle: 초기 상태
 * - pending: fetch() 함수가 실행 중인 상태
 * - fulfilled: fetch() 함수가 성공적으로 실행된 상태
 * - rejected: fetch() 함수가 실패한 상태
 * @typedef {'idle'|'pending'|'fulfilled'|'rejected'} ZustandApiStatus
 */

/**
 * @template T
 * @template U
 * @typedef {Object} StoreApiData<T, U>
 * @property {ZustandApiStatus} status 상태메세지
 * @property {T|undefined} data
 * @property {string|null} error 에러메세지
 * @property {function(U)} fetchData 실제 fetch() 함수를 실행 및 파싱하여 data에 저장하는 함수
 */

/** @typedef {boolean|T|string|undefined|null} ZustandSelected */

/**
 * @template T
 * @template U
 * @typedef {{
 *   (): import('zustand').ExtractState<import('zustand').StoreApi<StoreApiData<T, U>>>
 *   (selector: (state: import('zustand').ExtractState<import('zustand').StoreApi<StoreApiData<T, U>>>) => ZustandSelected): ZustandSelected
 * } & import('zustand').StoreApi<StoreApiData<T, U>>} ZustandStoreState<T, U>
 */

/**
 * @template T
 * @template U
 * @typedef {{
 *   (): StoreApiData<T, U>;
 *   (selector: (state: ZustandStoreState<T, U>) => ZustandSelected): ZustandSelected;
 * } & import('zustand').StoreApi<StoreApiData<T, U>>} ZustandStore<T, U>
 */
