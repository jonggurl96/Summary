/**
 * - idle: 초기 상태
 * - pending: fetch() 함수가 실행 중인 상태
 * - fulfilled: fetch() 함수가 성공적으로 실행된 상태
 * - rejected: fetch() 함수가 실패한 상태
 * @typedef {'idle'|'pending'|'fulfilled'|'rejected'} ZustandApiStatus
 */

/**
 * @template T
 * @template R
 * @typedef {Object} StoreApiData<T, R>
 * @property {ZustandApiStatus} status 상태메시지
 * @property {T|undefined} data
 * @property {string|null} error 에러메시지
 * @property {function(): boolean} isIdle 상태메시지가 idle인 경우 참.
 * @property {function(): boolean} isLoading 상태메시지가 pending인 경우 참.
 * @property {function(): boolean} isLoaded 상태메시지가 fulfilled인 경우 참.
 * @property {function(R)} fetchData 실제 fetch() 함수를 실행 및 파싱하여 data에 저장하는 함수
 * @property {function(R)} dispatch fetch된 data를 직접 설정하는 함수
 */

/**
 * @template T fetchData 파라미터 타입
 * @template R data 타입
 * @typedef {boolean|R|string|undefined|null|function(T): R} ZustandSelected<T, R>
 */

/**
 * @template T fetchData 파라미터 타입
 * @template R data 타입
 * @typedef {{
 *   (): import('zustand').ExtractState<import('zustand').StoreApi<StoreApiData<T, R>>>
 *   (selector: (state: import('zustand').ExtractState<import('zustand').StoreApi<StoreApiData<T, R>>>) => ZustandSelected<T, R>): ZustandSelected
 * } & import('zustand').StoreApi<StoreApiData<T, R>>} ZustandStoreState<T, R>
 */

/**
 * @template T fetchData 파라미터 타입
 * @template R data 타입
 * @typedef {{
 *   (): StoreApiData<T, R>;
 *   (selector: (state: ZustandStoreState<T, R>) => ZustandSelected<T, R>): ZustandSelected<T, R>;
 * } & import('zustand').StoreApi<StoreApiData<T, R>> & function(function(): selected): selected} ZustandStore<T, R>
 */

/**
 * @template T fetchData 파라미터 타입
 * @template R data 타입
 * @typedef {{
 *   status: ZustandStore<T, R>,
 *   data: R,
 *   error: string|null,
 *   isIdle: boolean,
 *   isLoading: boolean,
 *   isLoaded: boolean,
 *   fetchData: function(T): void,
 *   dispatch: function(R): void,
 * }} CommonStore<T, R>
 */
