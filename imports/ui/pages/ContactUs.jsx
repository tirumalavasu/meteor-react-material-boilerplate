import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link, browserHistory } from 'react-router';

class ContactUs extends Component {

  componentWillMount( ) {
      if (!Meteor.userId( )) {
          browserHistory.push( '/login' );
      }
  }

  componentDidUpdate( prevProps, prevState ) {
      if (!Meteor.userId( )) {
          browserHistory.push( '/login' );
      }
  }

  render() {
    return (<h1>This is Contact Us Page</h1>);
  }
}

export default ContactUs;
