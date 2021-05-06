const DEFAULT_STATE = {
  accounts: [

  ]
};

const accountReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'INITIAL_LOAD':
            let newState= { accounts: [...action.payload]};
            return newState;
        default:
            return state;
    }
};

export default accountReducer;
