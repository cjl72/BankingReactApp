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
            const accountIndex = state.accounts.findIndex(char => char.id === transaction.id);
            const newBalance = state.accounts[accountIndex].balance - transaction.amount;
            newState.accounts[accountIndex].setState({ balance: newBalance });
            return newState;
        default:
            return state;
    }
};

export default accountReducer;
