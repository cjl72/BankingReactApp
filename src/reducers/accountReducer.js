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
            const { name, amount, id } = action.payload;
            const accountIndex = newState.accounts.findIndex(char => char._id === id.toString)
            const newBal = newState.accounts[accountIndex].balance.parseInt - amount.parseInt;
            newState.accounts[accountIndex].balance = newBal.toString();
            console.log(newBal);
            return newState;
        default:
            return newState;
    }
};

export default accountReducer;
