import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Link, browserHistory } from 'react-router';

class NotFound extends Component {

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
    return (<h1>Hello World</h1>);
  }
}

export default NotFound;
