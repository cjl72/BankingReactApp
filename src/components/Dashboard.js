import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

    renderList() {
        let accountList = [this.props.accounts];

        return accountList.map((char, index) => {
           return(
             <div className='card' key={index}>
                 <div className='card-body'>
                     { char.name }
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
                <ul className='list-group'>
                    { accountList }
                </ul>
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
