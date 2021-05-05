import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/dashboard.css';


class Dashboard extends React.Component {

    state = {
        accountsList: [{id: 1, name: 'Michael', balance: 20, transactions: []},
            {id: 2, name: 'Jim', balance: 5000, transactions: []},
            {id: 3, name: 'Pam', balance: 6000, transactions: []},
            {id: 4, name: 'Dwight', balance: 20000, transactions: []},
            {id: 5, name: 'Stanley', balance: 600000, transactions: []},
            {id: 6, name: 'Kevin', balance: 3000, transactions: []}]
    }

    renderList() {

        return this.state.accountsList.map((char, index) => {
           return(
             <div className='card' key={index}>
                 <div className='card-body justify-content-center'>
                     <h2 className='card-header'>{ char.name }</h2>
                     <Link to ={ `/account/${char.id}` }>
                         <button type='button'
                                 className='btn btn-primary'>
                             Account Details
                         </button>
                     </Link>
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
        )
    }
}

const mapStateToProps = state => {
    return {
      accounts: state.accounts
    };
};

export default connect(mapStateToProps, null)(Dashboard);
