export const initialLoad = (accounts) => {
    return {
        type: 'INITIAL_LOAD',
        payload: accounts
    }
}
