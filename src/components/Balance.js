import React from 'react';
import { connect } from 'react-redux';

class Balance extends React.Component {
    state = { name: '', amount: '', type: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
    }

    render () {
        return (
            <div className="balance container text-center">
                <h4>Balance: ${ this.props.balance } </h4> <br />
                <form onSubmit={this.onFormSubmit}>
                    <div className='form-group'>
                        <label>Transaction Name</label>
                        <input type='text' className='form-control'
                               name='name'
                               value={this.state.name} />
                    </div>
                </form>
                <form onSubmit={this.onFormSubmit}>
                    <div className='form-group'>
                        <label>Amount</label>
                        <input type='text' className='form-control'
                               name='amount'
                               value={this.state.amount} />
                    </div>
                </form>
                <button type='button' className='btn btn-danger'>
                    Withdraw
                </button>
                <button type='button' className='btn btn-success'>
                    Deposit
                </button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {

    };
}

export default connect(mapStateToProps,{  })(Balance);
