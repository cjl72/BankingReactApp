import React from 'react';
import { connect } from 'react-redux';
import Balance from './Balance';
import { deleteAccount } from "../actions";

class Account extends React.Component{

    render() {
        const id = this.props.match.params.id;
        console.log(id);
        const account = this.props.accounts.find(char => char.id.toString() === id.toString());
        console.log(account);
    return (
          <div className='container text-center'>
              <h1>Account: { id }</h1>
              <div className='card'>
                  <h2>{ account.name } Account</h2>
              </div>
              <div className='card'>
                  <Balance balance={ account.balance } id={ account.id }/>
              </div>
              <button type='button'
                      className='btn btn-danger'
                      onClick= { () => this.props.deleteAccount(account.id) }>
                  Delete
              </button>
              <ul className="list-group">

              </ul>
              <div className='container'>

              </div>
          </div>
        )};
};

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts.accounts
    }
}

export default connect(mapStateToProps, { deleteAccount })(Account);
