import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { RaisedButton, TextField } from 'material-ui';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import { Grid, Cell, Textfield } from 'react-mdl';

export default class Login extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    facebookLogin = () => {
      Meteor.loginWithFacebook({}, ( err ) => {
          if ( err ) {
              console.log(err);
              this.setState({ error: err.reason });
          } else {
              browserHistory.push( '/' );
          }
      });
    }

    twitterLogin = () => {
      Meteor.loginWithTwitter({}, ( err ) => {
          if ( err ) {
              console.log(err);
              this.setState({ error: err.reason });
          } else {
              browserHistory.push( '/' );
          }
      });
    }

    googleLogin = () => {
      Meteor.loginWithGoogle({}, ( err ) => {
          if ( err ) {
              console.log(err);
              this.setState({ error: err.reason });
          } else {
              browserHistory.push( '/' );
          }
      });
    }

    githubLogin = () => {
      Meteor.loginWithGithub({}, ( err ) => {
          if ( err ) {
              console.log(err);
              this.setState({ error: err.reason });
          } else {
              browserHistory.push( '/' );
          }
      });
    }

    handleSubmit( e ) {
        e.preventDefault( );
        let email = document.getElementById( 'login-email' ).value;
        let password = document.getElementById( 'login-password' ).value;
        Meteor.loginWithPassword(email, password, ( err ) => {
            if ( err ) {
                this.setState({ error: err.reason });
            } else {
                browserHistory.push( '/' );
            }
        });
    }

    render( ) {
        const error = this.state.error;
        return (
          <div className='container'>
            <Grid>
              <Cell col={2} tablet={0} phone={0}>

              </Cell>
              <Cell col={8} tablet={12} phone={12} className='login'>
                <Grid>
                  <Cell col={6} className='login-left vb-pull-left'>
                    <Cell col={12} tablet={12} phone={12}>
                      Login with
                    </Cell>
                    <Cell col={12} tablet={12} phone={12}>
                      <RaisedButton label="Facebook" type="button" id="facebook-button" className="full-width" default={true} onClick={this.facebookLogin} icon={<FontIcon className="ion-social-facebook facebook fs18" />}/>
                    </Cell>
                    <Cell col={12} tablet={12} phone={12}>
                      <RaisedButton label="Twitter" type="button" id="twitter-button" className="full-width" default={true} onClick={this.twitterLogin} icon={<FontIcon className="ion-social-twitter twitter fs18" />}/>
                    </Cell>
                    <Cell col={12} tablet={12} phone={12}>
                      <RaisedButton label="Google+" type="button" id="googleplus-button" className="full-width" default={true} onClick={this.googleLogin} icon={<FontIcon className="ion-social-googleplus google-plus fs18" />}/>
                    </Cell>
                    <Cell col={12} tablet={12} phone={12}>
                      <RaisedButton label="Github" type="button" id="github-button" className="full-width" default={true} onClick={this.githubLogin} icon={<FontIcon className="ion-social-github github fs18" />}/>
                    </Cell>
                  </Cell>
                  <Cell col={6} className='login-right vb-pull-right'>
                    <form className='form' onSubmit={this.handleSubmit}>
                      <div className="login-header">
                        <h3 className="text-center">Login</h3>
                      </div>
                      <div className='form-group'>
                        <Textfield className='full-width' type='email' id='login-email' ref='email' label="Email" floatingLabel/>
                        <Textfield className='full-width' type='password' id='login-password' ref='password' label="Password" floatingLabel/>
                      </div><br/>
                      <div className="form-group text-center">
                        <RaisedButton label="Login" type="submit" id="login-button" className="full-width" secondary={true}/>
                      </div><br/>
                      <div className="form-group text-center">
                        <p className="text-center">Or</p>
                      </div>
                      <div className="form-group text-center">
                        <Link to="/signup">
                          <RaisedButton label="Register" type="button" id="register-button" className="full-width" default={true}/>
                        </Link>
                      </div>
                      <div className="modal-footer" style={{
                                borderTop: 0
                      }}></div>
                    </form>
                  </Cell>
                </Grid>
              </Cell>
              <Cell col={2} tablet={2} phone={2}>

              </Cell>
            </Grid>
          </div>
        );
    }
}
