import React, {Component} from 'react';
import {Platform, Image, StyleSheet, SafeAreaView,Text, View, ActivityIndicator, Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');

import {Actions} from 'react-native-router-flux';

export default class Setting extends Component {

    constructor(props) {
        super(props);

      }
    render() {
        return (
            <View>
              <Text>Setting</Text>
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
