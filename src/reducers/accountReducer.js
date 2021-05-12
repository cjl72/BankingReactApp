const DEFAULT_STATE = {
  accounts: [

  ]



};

const accountReducer = (state = DEFAULT_STATE, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'INITIAL_LOAD':
            newState = {accounts: [...action.payload]}
            return newState;
        case 'WITHDRAW':
            const transaction = action.payload;
            const accountIndex = state.accounts.findIndex(char => char.id.toString() === transaction.id.toString());
            const currentBalance = state.accounts[accountIndex].balance;
            newState.accounts[accountIndex].balance = currentBalance - transaction.amount;
            return newState;
        default:
            return newState;
    }
};

export default accountReducer;
