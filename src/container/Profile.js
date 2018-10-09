import React, {Component} from  'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import navigationImage from '../assets/images/logo_navigation.png';
import Drawer from 'react-native-drawer'
import InputField from '../components/InputField';
const {height, width} = Dimensions.get("window");
import ControlPanel from '../widgets/controlPanel'
import NavBar from '../widgets/NavBar';
nThis = '';
export default class Profile extends Component {
    static navigationOptions = {
        header: null,
        
      };
    constructor(props) {
    super(props);
    nThis = this;
    nThis.state = {
       fName : '',
       lName : '',
       email : '',
       mobile : '',
       error : '',
       animating:false
    }
  }
  closeControlPanel = () => {
    nThis._drawer.close()
  };
  openControlPanel(){
    nThis._drawer.open()
  };
  updateProfile(){
    console.log('Otp sent');
    Actions.Login();
  }

  render(){
    const { animating } = nThis.state;
    const drawerStyles = {
        drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
        main: {paddingLeft: 3}}
    return(
        <Drawer
          type="overlay"
          content={<ControlPanel/>}
          ref={(ref) => this._drawer = ref}
          tapToClose={true}
          openDrawerOffset={0.2} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          tweenHandler={(ratio) => ({main: { opacity:(2-ratio)/2 }})}
        >
          <NavBar title="Profile" onClick={this.openControlPanel.bind(this)} />
         <View style = {styles.container} >
         
            <InputField
                label='First Name'
                highlightColor='black'
                width = {250}
                height= {80}
                dense = {true}
                secureTextEntry = {false}
                onChangeText={(text) => nThis.setState({fName: text})}
                value = {nThis.state.fName}/>
          
            <InputField
                label='Last Name'
                highlightColor='black'
                width = {250}
                height= {80}
                dense = {true}
                secureTextEntry = {false}
                onChangeText={(text) => nThis.setState({lName: text})}
                value = {nThis.state.lName}/>
         
            <InputField
                label='Email id'
                highlightColor='blue'
                width = {250}
                height= {80}
                dense = {true}
                secureTextEntry = {false}
                onChangeText={(text) => nThis.setState({email: text})}
                value = {nThis.state.email}/>

            <InputField
                label='Mobile'
                highlightColor='blue'
                width = {250}
                height= {80}
                dense = {true}
                secureTextEntry = {false}
                onChangeText={(text) => nThis.setState({mobile: text})}
                value = {nThis.state.mobile}
                keyboardType="numeric"/>

                <View
                    style={{alignItems: 'center',justifyContent: 'center'}}>
                   
                </View>
                <Button
                    raised
                    rounded
                    onPress={ () => {nThis.setState({animating : true}); nThis.updateProfile(); } }
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                    title={"Edit"}
                    loading={animating}
                    loadingRight/>
       </View>
       </Drawer>
    );
  }
}
  
  const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
   
  },
  phoneNumber: {
    justifyContent: 'center',
    alignItems: 'center',
      marginLeft: 30,
      marginRight: 30
  },
  line: {
      width: 80,
      height: 1,
      backgroundColor: '#000000',
      marginTop:5
  },
  button: {
      marginTop: 20,
      backgroundColor: '#235162',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:25,
      width:200
  },
  buttonText: {
      fontSize: 18,
      color: '#FFF',
      textAlign: 'center'
  },
})
