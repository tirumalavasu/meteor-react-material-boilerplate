import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link, browserHistory } from 'react-router';

class About extends Component {

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
    return (<h1>This is About Page</h1>);
  }
}

export default About;
