import React, {Component} from 'react';
import {Platform, Image, StyleSheet, SafeAreaView,Text, View, ActivityIndicator, Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');
import bgImage from '../assets/images/background.png';
//import logoImage from '../assets/images/logo.png';
import {Actions} from 'react-native-router-flux';

export default class Splash extends Component {

    constructor(props) {
        super(props);
         Actions.Login();
      }
    render() {
        return (
            <View>
            <Image style={styles.img} source={bgImage} >

            </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 img : {
     height:height,
     width : width,
     alignItems:'center',
     justifyContent:'center'
 }
});
