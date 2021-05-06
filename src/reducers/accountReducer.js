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
            const { name, amount, id} = action.payload;
            const account = state.accounts.find(char => char._id === id);
            console.log(account);
            return newState;
        default:
            return newState;
    }
};

export default accountReducer;
