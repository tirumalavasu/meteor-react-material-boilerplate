import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Link, browserHistory } from 'react-router';
import { AppBar, Drawer, Divider, IconButton, IconMenu, MenuItem, FlatButton, Toggle, Badge, List, ListItem, Avatar, Toolbar, ToolbarGroup } from 'material-ui';
import { Media, Left, Right, Body } from 'react-bootstrap';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import SocialPerson from 'material-ui/svg-icons/social/person';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  logout = (e) => {
    e.preventDefault( );
    Meteor.logout( );
    browserHistory.push( '/login' );
  };

  alert = () => {
      console.log('clicked');
  }

  toAbout = () => {
    this.setState({open: !this.state.open});
    browserHistory.push('/about');
  }

  toContactUs = () => {
    this.setState({open: !this.state.open});
    browserHistory.push('/contact-us');
  }

  render() {

    const Notification = (props) => (
        // <img src={this.props.currentUser.profile.avatar} className='n-pic' />
        <ListItem
          primaryText='This is a test notification'
          secondaryText='testing'
          leftAvatar={<Avatar src={this.props.currentUser.profile.avatar || ''} />}
          rightIcon={<CommunicationChatBubble />}
          className='no-user-select'
        />
      );

      const Message = (props) => (
          // <img src={this.props.currentUser.profile.avatar} className='n-pic' />
          <ListItem
            primaryText='This is a test message'
            secondaryText='testing'
            leftAvatar={<Avatar src={this.props.currentUser.profile.avatar || ''} />}
            rightIcon={<CommunicationChatBubble />}
            className='no-user-select'
          />
        );

    const UserProfile = (props) => (
      <div>
        <SocialPerson className='profile-icon'/>
        {/* <img src={}  className='profile-icon'/> */}
        <div className='profile-name'>{this.props.currentUser.username}</div>
        <span className='profile-email'>{this.props.currentUser.emails[0].address}</span>
      </div>
    );

    const LeftMenu = (props) => (
            <div className='hidden-lg hidden-md'>
              <IconButton onTouchTap={this.handleToggle}><NavigationMenu className=''/></IconButton>
              <Drawer
                docked={false}
                width={240}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
              >
                <MenuItem onTouchTap={this.toAbout}>About</MenuItem>
                <MenuItem onTouchTap={this.toContactUs}>Contact Us</MenuItem>
              </Drawer>
            </div>
          );

    const Logged = (props) => (
      <Toolbar style={{backgroundColor: 'transparent'}}>
        <ToolbarGroup>
          <Link to='/about' className='hidden-sm hidden-xs'>
            <FlatButton label='About' style={{marginTop: '0', color: '#fff'}}/>
          </Link>
          <Link to='/contact-us' className='hidden-sm hidden-xs'>
            <FlatButton label='Contact Us' style={{marginTop: '0', color: '#fff'}}/>
          </Link>
          <Badge
            badgeContent={10}
            secondary={true}
            style={{padding: 0}}
            badgeStyle={{top: -2, right: 0}}
          >
            <IconMenu
              {...props}
              iconButtonElement={
                <IconButton><CommunicationEmail /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
              style={{marginTop: '0px'}}
            >
              <MenuItem primaryText='Messages' style={{minWidth: '300px', padding: '0'}} className='no-user-select' rightIcon={<ActionSettings className='user-select' onClick={this.alert} />}/>
              <Divider />
              <MenuItem primaryText={<Message />} />
              <MenuItem primaryText={<Message />} />
              <MenuItem primaryText={<Message />} />
              <Divider />
              <MenuItem primaryText="See All 10 Messages" className='text-center'/>
            </IconMenu>
          </Badge>
          <Badge
            badgeContent={10}
            secondary={true}
            style={{padding: 0}}
            badgeStyle={{top: -2, right: 0}}
          >
            <IconMenu
              {...props}
              iconButtonElement={
                <IconButton><NotificationsIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
              style={{marginTop: '0px'}}
            >
              <MenuItem primaryText='Notifications' style={{minWidth: '300px', padding: '0'}} className='no-user-select' rightIcon={<ActionSettings className='user-select' onClick={this.alert} />}/>
              <Divider />
              <MenuItem primaryText={<Notification />} />
              <MenuItem primaryText={<Notification />} />
              <MenuItem primaryText={<Notification />} />
              <Divider />
              <MenuItem primaryText="See All 10 Notifications" className='text-center'/>
            </IconMenu>
          </Badge>
          <IconMenu
            {...props}
            iconButtonElement={
              <IconButton><SocialPerson /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            style={{marginTop: '0px'}}
          >
            <MenuItem primaryText={<UserProfile />} className='profile-sub nobg no-user-select mb20' style={{minWidth: 270}} />
            <Divider />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" onClick={this.logout} />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );

    const Login = (props) => (
      <FlatButton label='Login' style={{marginTop: '8px'}}/>
    );

    return (
      <AppBar
        title="Dream Meteor"
        titleStyle={{flex: 'initial', cursor: 'pointer', fontWeight: 'bold'}}
        className='mb20'
        onTitleTouchTap = {() => {browserHistory.push('/')}}
        iconElementLeft={<LeftMenu />}
        iconElementRight={this.props.userId ? <Logged /> : <Login />}
        iconStyleRight = {{marginTop: '4px'}}
      />
    );
  }
}

export default createContainer(() => {
    // let usersSub = Meteor.subscribe('users.all');
    // console.log(Meteor.user());
    return {
        // ready: usersSub.ready(),
        userId: Meteor.userId(),
        currentUser: Meteor.user() || {}
    }
}, Header);
