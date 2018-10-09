import React, { Component } from 'react';
import {
 View,
 Image,
 Dimensions,
 Text,
 TouchableOpacity
} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab, Button, Icon,Badge } from 'native-base';

import navImage from '../assets/images/nav.png';

let {height, width} = Dimensions.get('window');

export default class NavBar extends React.Component {
 constructor(props) {
   super(props);
 }

 componentDidMount() {
   
 }

 render() {
   
   return (
     <Header style={{width:width, justifyContent:"center"}}>
    
        <Left><Button transparent>
          <TouchableOpacity onPress={()=>this.props.onClick()}><Image source={navImage} style={{height:20, width:28}} /></TouchableOpacity>
         </Button></Left>
       <Title style={{paddingTop:12}}>{this.props.title}</Title>
       {this.props.title == "Profile" ? null :
        <Right><Button transparent>
            <Icon name="ios-search" />
        </Button></Right>}
     </Header>)
 }
}

