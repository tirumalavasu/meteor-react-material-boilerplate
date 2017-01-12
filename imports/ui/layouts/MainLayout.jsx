import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, browserHistory } from 'react-router';
import {
    grey300,
    white,
    darkBlack,
    fullBlack
} from 'material-ui/styles/colors';
// import {fade} from '../../utils/colorManipulator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Header from '../components/partials/Header.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin( );

const muiTheme = getMuiTheme({
    palette: {
        // primary1Color: 'rgba(255, 255, 255, 1)',
        // primary2Color: '#fff',
        // primary3Color: '#fff',
        // accent1Color: '#2196F3',
        // accent2Color: '#2196F3',
        // accent3Color: '#2196F3',
        // textColor: '#333',
        // canvasColor: white,
        // borderColor: grey300,
        // shadowColor: fullBlack
    },
    checkbox: {
        // boxColor: darkBlack,
        // checkedColor: '#2196F3',
        // requiredColor: '#2196F3',
        // disabledColor: grey300,
        // labelColor: darkBlack,
        // labelDisabledColor: grey300
    },
    appBar: {
        // height: 50
    }
});

export default class MainLayout extends Component {
    render( ) {
        return (
            <div>
              <MuiThemeProvider muiTheme={muiTheme}>
                <Header />
              </MuiThemeProvider>
              <MuiThemeProvider muiTheme={muiTheme}>
                <main className='container'>{this.props.children}</main>
                </MuiThemeProvider>
            </div>
        );
    }
}
