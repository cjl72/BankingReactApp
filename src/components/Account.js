import React from 'react';
import { connect } from 'react-redux';

class Account extends React.Component {
    render() {
        return (
          <div className='container text-center'>
              Account: {this.props.match.params.id}
          </div>
        );
    };
};

export default Account;
