import React, {Component} from  'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableHighlight,
    ActivityIndicator,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,

} from 'react-native';
import { Icon, Item, Footer, Title} from 'native-base';

import { Actions } from 'react-native-router-flux';
import navigationImage from '../assets/images/logo_navigation.png';
import homeImage from '../assets/images/home.png';
import megaphoneImage from '../assets/images/megaphone.png';
import profileImage from '../assets/images/user.png';
import settingImage from '../assets/images/settings.png';
const {height, width} = Dimensions.get("window");

var sidePaneArr = {
    "Home" : {
        onPress : "HomePage",


    },
    "Live" : {
        onPress : "Live",
        // icon:"video",
        type:"Feather"
    },
    "Profile" : {
        onPress : "Profile",
        // icon:"user",
        type:"Feather"
    },

    "Setting" : {
        onPress: "Setting",
        // icon:"settings",
        type:"Feather"
    }


}
export default class ControlPanel extends Component {

    static navigationOptions = {
        header: null,

      };
      constructor(props) {
        super(props);
      }

      navigateTo(i) {
          Actions[i]()
      }
    renderSideMenu () {
        let s = [];
        for (let i in sidePaneArr) {
            s.push(
                <TouchableOpacity
                  onPress={()=>this.navigateTo(sidePaneArr[i]["onPress"])}
                  style ={{flexDirection:"row", marginLeft:10, marginTop:15}}
                >
                    <Icon name={sidePaneArr[i]["icon"]} size={22} type={sidePaneArr[i]["type"]} style={{ color:"#666"}}/>
                    <Text style={{marginLeft:15, paddingTop:5, fontSize:20, color:"#666", fontWeight:"bold"}}>{i}</Text>
                </TouchableOpacity>
            )
        }
        return s;
    }
    render() {
        return(

            <ScrollView style={{flex:1, width:250, backgroundColor:'#fff'}}>
            <TouchableOpacity
              style = {{flexDirection:'row', alignItems:'center', marginTop:40}}
              onPress={()=>{Actions.HomePage() }}>
              <Image style={{alignSelf:'center',marginLeft:5, width:width*.5,resizeMode:"contain"}} source={navigationImage}/>
            </TouchableOpacity>
            <Item style={{borderBottomWidth:0, height:70}}></Item>
            {this.renderSideMenu()}
          
          </ScrollView>






        )
    }
}
