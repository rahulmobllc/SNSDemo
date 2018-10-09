import React, {Component} from "react";

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    ImageBackground,
    TextInput,
    Dimensions,
    ScrollView,
    CheckBox,
    TouchableHighlight,
    Linking,
    ActivityIndicator
} from "react-native";
import {Text, Body, Left, Right, IconNB} from "native-base";

import bgImage from '../assets/images/background.png';
import logoImage from '../assets/images/logo.png';
import { getMethod } from '../network/FetchUser';
import InputField from '../components/InputField';

import facebook from '../assets/images/facebook.png';
import gMail from '../assets/images/gmail.png';
import styles1 from '../css/LoginStyle';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {Input} from 'react-native-elements';
const {height, width} = Dimensions.get("window");
// import { Madoka } from 'react-native-textinput-effects';
//const URL = "http://172.20.20.197:8080/items";


export default class Login extends Component {
    static navigationOptions = {
        header: null
      };
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        handleEmail = (text) => {
            this.setState({email: text})
        }
        handlePassword = (text) => {
            this.setState({password: text})
        }
        login = (email, pass) => {
            alert('email: ' + email + ' password: ' + pass)
        }
    }
    showPass = () => {
        if (this.state.press == false) {
            this.setState({showPass: false, press: true})
        } else {
            this.setState({showPass: true, press: false})
        }

    }
    onSubmit(){
      // fetch.get("nis2sewatest1&password=niswelcome1");

      const { email, password } = this.state;
      console.log(email+' : '+password);
      if(!email == true || !password == true){
        alert('Email id or password is wrong');
        return;
      }
      // alert('here');
      let url = "https://nirankari.org/intranet/rest/post/user/login?username=";
      url = url+email+"&password="+password
      console.log(url);
      getMethod(url).then((response) => {
        //console.log(response);
        Actions.HomePage();
      }).catch((error) => {
        console.log(error);
      })
    }
    render() {
        const {navigate} = this.props.navigation;
        const url = {URL}

        // axios.get(url).then(response => alert(response));
        // console.log(response));
        return (
            <ScrollView contentContainerStyle={{justifyContent: "center",alignItems: "center"}}>

                <ImageBackground source={bgImage} style={{width: width,height: height}}>

                    <View style={{justifyContent: "center",alignItems: "center",width: width,height: height}}>
                        <Image source={logoImage} style={{width: 285,height: 175, marginBottom:10, width:width*.6,resizeMode:"contain"}}/>

                          <View style = {{marginTop:15}} >
                              <InputField
                                  label='Username'
                                  highlightColor='#fff'
                                  width = {300}
                                  height= {80}
                                  dense = {true}
                                  secureTextEntry = {false}
                                  onChangeText={(text) => this.setState({email: text})}
                                  value = {this.state.email}
                                  placeholderTextColor='#fff'
                                  />
                              <InputField
                                  label='Password'
                                  highlightColor='#fff'
                                  width = {300}
                                  height= {80}
                                  dense = {true}
                                  secureTextEntry = {true}
                                  onChangeText={(text) => this.setState({password: text})}
                                  value = {this.state.password}
                                  />
                          </View>
                          <View style={{flexDirection: 'row',alignItems:'center',marginLeft:47,marginRight:20}}>
                              <Text>Remember Me</Text>
                              <CheckBox style={{
                                      borderColor: 'red',
                                      width: 20,
                                      height: 20,
                                      marginTop: 5,
                                      marginLeft: 5}}/>
                               <Right>
                                <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.nirankari.org/intranet/forgotten-password')}>
                               <Text>Forgot Password</Text>
                               </TouchableOpacity>
                               </Right>
                          </View>
                          <View
                              style={{
                                  alignItems: 'center',
                                  justifyContent: 'center'
                              }}>
                              <TouchableOpacity
                                  style={{
                                      width: width - 95,
                                      height: 40,
                                      borderRadius: 25,
                                      backgroundColor: 'white',
                                      marginTop: 20,
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                  }}
                                  onPress={()=>this.onSubmit()}>
                                  <Text
                                      style={{
                                          color: '#128ad5',
                                          fontSize: 16,
                                          textAlign: 'center',
                                          fontWeight: "bold"

                                      }}>Login</Text>
                                      
                              </TouchableOpacity>
                          </View>
                          <Text
                              style={{
                                  marginTop: 10,
                                  color: 'white',
                                  fontSize: 24,
                                  textAlign: 'center'
                              }}>or</Text>

                              <View style={{
                                      flexDirection: 'row',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      marginTop: 10
                                      }}>

                                  <TouchableOpacity style={styles.socialLogin}>
                                      <Image
                                          style={{
                                              alignItems: 'center',
                                              padding: 10,
                                              justifyContent: 'center'
                                          }}
                                          source={facebook}/>
                                  </TouchableOpacity>

                                  <TouchableOpacity style={styles.socialGoogle}>
                                      <Image
                                          style={{
                                              alignItems: 'center',
                                              padding: 10,
                                              justifyContent: 'center'
                                          }}
                                          source={gMail}/>
                                  </TouchableOpacity>
                              </View>
                                 <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.nirankari.org/intranet/create-an-account')}>
                                 <Text style={{
                                         marginTop: 15,
                                         color: 'white',
                                         fontSize: 16,
                                         textAlign: 'center'}}> Dont have an account? Register</Text>

                                 </TouchableOpacity>
                    </View>
                </ImageBackground>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    socialContainer: {
        justifyContent: 'center'
    },
    socialLogin: {
        width: 120,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialGoogle: {
        width: 120,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    socialText: {
        color: '#128ad5',
        fontSize: 26,
        textAlign: 'center'
    }
});
