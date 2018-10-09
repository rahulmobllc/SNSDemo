
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import fbImage from '../assets/images/facebook.png';
const {height, width} = Dimensions.get("window");
import Drawer from 'react-native-drawer'

export default class Registration extends React.Component {

  render() {
    
    return (
      <Drawer
  type="overlay"
  content={<View style={{height:height, width:200, backgroundColor:"red"}}><Text>Home</Text></View>}
  ref={(ref) => this._drawer = ref}
  tapToClose={true}
  openDrawerOffset={0.2} // 20% gap on the right side of drawer
  panCloseMask={0.2}
  closedDrawerOffset={-3}
  styles={drawerStyles}>
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>this.openControlPanel()}>
        <Text>OPEN SIDEPANE</Text>
      </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image source={google}/>
        </TouchableOpacity> */}
        <Text>We are just getting started</Text>
      </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  button:{
    width: width - 95,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'white',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
  }
});
