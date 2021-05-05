import React from 'react';
import { connect } from 'react-redux';

class Account extends React.Component {
    state = {
        id: null,
        name: '',
        balance: null,
        transactions: [],
        accountsList: [
            {id: 1, name: 'Michael', balance: 20, transactions: []},
            {id: 2, name: 'Jim', balance: 5000, transactions: []},
            {id: 3, name: 'Pam', balance: 6000, transactions: []},
            {id: 4, name: 'Dwight', balance: 20000, transactions: []},
            {id: 5, name: 'Stanley', balance: 600000, transactions: []},
            {id: 6, name: 'Kevin', balance: 3000, transactions: []},
            {id: 7, name: 'Phyllis', balance: 20000, transactions: []},
            {id: 8, name: 'Andy', balance: 600000, transactions: []},
            {id: 9, name: 'Darryl', balance: 3000, transactions: []}
        ]
    }

    componentDidMount() {
        this.getDataFromProps();
    }

    getDataFromProps() {
        const id = this.props.match.params.id;
        const account = this.state.accountsList.find(char => char.id.toString() === id.toString());
        this.setState({ id: account.id, name: account.name,
            balance: account.balance, transactions: account.transactions
        });
    }


    render() {
        return (
          <div className='container text-center'>
              <h1>Account: {this.props.match.params.id}</h1>
              <h2>{this.state.name}</h2>
          </div>
        );
    };
};

export default Account;
