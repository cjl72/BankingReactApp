import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/dashboard.css';


class Dashboard extends React.Component {

    renderList() {



        return this.props.accounts.map((char, index) => {
           return(
             <div className='card' key={index}>
                 <div className='card-body justify-content-center'>
                     <h2 className='card-header'>{ char.name }'s <br /> Account</h2>
                     <h4>Balance: ${ char.balance } </h4> <br />
                     <button type='button' className='btn btn-danger'>
                         Withdraw
                     </button>
                     <button type='button' className='btn btn-success'>
                         Deposit
                     </button>
                     <Link to ={ `/account/${char.id}` }>
                         <button type='button'
                                 className='btn btn-primary'>
                             Account Details
                         </button>
                     </Link>
                     <button type='button'
                             className='btn btn-danger'>
                         Delete
                     </button>
                 </div>
             </div>
           );
        });
    }

    render() {
        const accountList = this.renderList();
        return (
            <div className="dashboard container text-center">
                <h1>Dashboard</h1>
                { accountList }
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
      accounts: state.accounts.accounts
    };
};

export default connect(mapStateToProps, null)(Dashboard);
