import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
}  from 'react-native';



import { Router, Scene } from 'react-native-router-flux';

import Login from '../src/container/Login';
import Splash from '../src/container/Splash';
import Registration from '../src/container/Registration';
import HomePage from './container/HomePage';
import Profile from './container/Profile';
import Live from './container/Live';
import Setting from './container/Setting';


export default class Navigator extends Component {

    render(){

        return(
            <Router>
                <Scene key="root">
                    <Scene key="Splash"  component={Splash} hideNavBar={true}  />
                    <Scene key="Login"  initial={false} component={Login} title="Login" hideNavBar={false}  />
                    <Scene key="HomePage" initial component={HomePage} title="Home" hideNavBar={false}  />
                    <Scene key="Profile"   component={Profile} title="Profile" hideNavBar={false}  />
                    <Scene key="Live"   component={Live} title="Live" hideNavBar={false}  />
                    <Scene key="Setting"   component={Setting} title="Setting" hideNavBar={false}  />
                </Scene>
            </Router>

        );
    }
}
