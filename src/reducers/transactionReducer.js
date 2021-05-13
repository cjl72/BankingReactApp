const DEFAULT_STATE = {
    transactions: [

    ],
    transactionId: 0
};

const transactionReducer = (state = DEFAULT_STATE, action) => {
    let newState = { transactions: [...state.transactions], transactionId: state.transactionId};
    switch (action.type) {
        case 'WITHDRAW':
            const transaction = action.payload;
            newState.transactionId += 1;
            transaction.transactionId = newState.transactionId;
            transaction.type = 'withdraw';
            newState.transactions.push(transaction);
            return newState;
        case 'DEPOSIT':
            const transaction2 = action.payload;
            newState.transactionId += 1;
            transaction2.transactionId = newState.transactionId;
            transaction2.type = 'deposit';
            newState.transactions.push(transaction2);
            return newState;
        default:
            return state;
    }
};

export default transactionReducer;
