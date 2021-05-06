export const initialLoad = (accounts) => {
    return {
        type: 'INITIAL_LOAD',
        payload: accounts
    }
}
export const withdraw = (name, amount, type, id) => {
    return {
        type: 'WITHDRAW',
        payload: {
            name, amount, type, id
        }
    }
}

export const deposit = (name, amount, type, id) => {
    return {
        type: 'DEPOSIT',
        payload: {
            name, amount,type, id
        }
    }
}
