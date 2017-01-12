import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link, browserHistory } from 'react-router';

class Home extends Component {

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

    render( ) {
        return (
            <h1>This is Home Page</h1>
        );
    }
}

export default Home;
