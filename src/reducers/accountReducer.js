const DEFAULT_STATE = {
  accounts: [
      {id: 1, name: 'Michael', balance: 20, transactions: []},
      {id: 2, name: 'Jim', balance: 5000, transactions: []},
      {id: 3, name: 'Pam', balance: 6000, transactions: []},
      {id: 4, name: 'Dwight', balance: 20000, transactions: []},
      {id: 5, name: 'Stanley', balance: 600000, transactions: []},
      {id: 6, name: 'Kevin', balance: 3000, transactions: []}
  ]
};

const accountReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default accountReducer;
