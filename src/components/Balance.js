import React from 'react';
import { connect } from 'react-redux';
import { withdraw } from "../actions";
import { deposit } from "../actions";

class Balance extends React.Component {
    state = { name: '', amount: '', typeTransaction: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.transactionType();
        if (this.state.typeTransaction === 'withdraw') {

        }else if(this.state.typeTransaction === 'deposit') {

        }
        const frm = document.getElementById('form');
        frm.reset();
        return false;
    }

    transactionType = (props) => {
        if(props.value === 'Withdraw') {
            this.setState({ typeTransaction: 'withdraw'})
        } else if(props.value === 'Deposit') {
            this.setState({ typeTransaction: 'deposit' })
        }
    }

    render () {
        return (
            <div className="balance container text-center">
                <h4>Balance: ${ this.props.balance } </h4> <br />
                <form onSubmit={this.onFormSubmit} id='form'>
                    <div className='form-group'>
                        <label>Transaction Name</label>
                        <input type='text' className='form-control'
                               name='name'
                               value={this.state.name}
                               onChange={event => this.setState( { name: event.target.value })}/>
                    </div>
                    <div className='form-group'>
                        <label>Amount</label>
                        <input type='text' className='form-control'
                               name='amount'
                               value={this.state.amount}
                               onChange={event => this.setState( { amount: event.target.value })}/>
                    </div>
                </form>
                <input type='submit' name='withdraw' className='btn btn-danger' value='Withdraw' />
                <input type='submit' name='deposit' className='btn btn-success' value='Deposit' />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts.accounts
    };
}

export default connect(mapStateToProps,{ withdraw, deposit })(Balance);
