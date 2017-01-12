import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory, Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Textfield, Grid, Cell, IconButton, Spinner } from 'react-mdl';
import { RaisedButton, FontIcon } from 'material-ui';
import { Countries } from '../../api/countries/countries';

class Signup extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            file: '',
            countryId: '',
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    componentWillMount( ) {
        if (Meteor.userId( )) {
            browserHistory.push( '/' );
        }
    }

    componentDidUpdate( prevProps, prevState ) {
        if (Meteor.userId( )) {
            browserHistory.push( '/' );
        }
    }

    gotoLogin = (e) => {
      e.preventDefault();
      browserHistory.push( '/login' );
    }

    handleSubmit( e ) {
        e.preventDefault( );
        let username = document.getElementById( "signup-username" ).value;
        let email = document.getElementById( "signup-email" ).value;
        let password = document.getElementById( "signup-password" ).value;
        this.setState({ error: "test" });
        let options = {
          email: email,
          username: username,
          password: password
        };
        if(username !== '' && email !== '' && password !== ''){
          Accounts.createUser(options, ( err ) => {
              if ( err ) {
                  this.setState({ error: err.reason });
              } else {
                  browserHistory.push( '/' );
              }
          });
        } else {
          alert('Please fill the required fields');
        }
    }

    render( ) {
        const error = this.state.error;
        return (
          <div className='container'>
            <Grid>
              <Cell col={4} className='login'>
                <form className='form' onSubmit={this.handleSubmit}>
                  <div className="login-header">
                    <h3 className="text-center">Register</h3>
                  </div>
                  <Grid>
                    <Cell col={12} tablet={12} phone={12}>
                      <Textfield className='full-width' type='text' id='signup-username' ref='username' label="Username" floatingLabel/>
                    </Cell>
                    <Cell col={12} tablet={12} phone={12}>
                      <Textfield className='full-width' type='email' id='signup-email' ref='email' label="Email" floatingLabel/>
                    </Cell>
                    <Cell col={12} tablet={12} phone={12}>
                      <Textfield className='full-width' type='password' id='signup-password' ref='password' label="Password" floatingLabel/>
                    </Cell>
                    <Cell col={12} tablet={12} phone={12}>
                      <RaisedButton label="Register" type="button" id="signup-button" className="vb-pull-right full-width" onClick={this.handleSubmit.bind( this )} secondary={true}/>
                    </Cell>
                    <Cell col={12} tablet={12} phone={12}>
                      <span className="text-center db">Or</span>
                    </Cell>
                    <Cell col={12} tablet={12} phone={12}>
                      <RaisedButton label="Login" type="button" id="login-button" className="vb-pull-right full-width" default={true} onClick={this.gotoLogin}/>
                    </Cell>
                  </Grid>
                </form>
              </Cell>
            </Grid>
          </div>
        );
    }
}

export default Signup;
