import React, {Component} from  'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ActivityIndicator,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { Header, Card} from 'react-native-elements';
import navigationImage from '../assets/images/logo_navigation.png';
import Drawer from 'react-native-drawer'
import arr from '../network/data.json'
import ControlPanel from '../widgets/controlPanel'
import NavBar from '../widgets/NavBar';
import {Container, Content, Title,} from 'native-base';
import voiceDivine from '../assets/images/voice_divine.jpg';
import kidsDivine from '../assets/images/kids_divine.png';
import radioDivine from '../assets/images/radio_divine.png';
import newsDivine from '../assets/images/news.jpg';
let nThis = '';
export default class HomePage extends Component {

    static navigationOptions = {
        header: null,

      };
  constructor(props) {
    super(props);
    nThis = this;
    nThis.state = {
    }
  }

  closeControlPanel = () => {
    nThis._drawer.close()
  };
  openControlPanel(){
    nThis._drawer.open()
  };



   showMainView(){
    return(
      <Container>
       <Content style = {styles.container}>
                <View style={{backgroundColor:'transparent'}}>
                    <Text style = {{margin:5,  color:'black'}} >Trending</Text>
                    <ScrollView horizontal = {true}>
                            {this.showList()}
                    </ScrollView>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style = {{margin:5,  color:'black'}} >Video</Text>
                    <ScrollView horizontal = {true}>
                            {this.showList()}
                        </ScrollView>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style = {{margin:5,  color:'black'}} >Music</Text>
                    <ScrollView horizontal = {true}>
                            {this.showList()}
                        </ScrollView>
                </View>

                <View style={{flex:1,flexDirection:'row', marginTop:20, justifyContent:'center'}}>
                         <View style={{marginTop: 10}}>
                            <Text style = {{margin:5, justifyContent:'center',alignItems:'center', color:'black'}}></Text>
                            <ScrollView horizontal = {false}>
                                    {this.ShowPhoto()}
                            </ScrollView>
                        </View>
                        <View style={{marginTop: 10, marginLeft:20}}>
                            <Text style = {{margin:5,  color:'black'}}></Text>
                            <ScrollView horizontal = {false}>
                                    {this.ShowNews()}
                            </ScrollView>
                      </View>
                </View>
                <View style={{flex:1,flexDirection:'row', marginTop:10, justifyContent:'center'}}>
                         <View style={{marginTop: 10}}>
                            <Text style = {{margin:5, justifyContent:'center',alignItems:'center', color:'black'}}></Text>
                            <ScrollView horizontal = {false}>
                                    {this.ShowKids()}
                            </ScrollView>
                        </View>
                        <View style={{marginTop: 10, marginLeft:20}}>
                            <Text style = {{margin:5,  color:'black'}}></Text>
                            <ScrollView horizontal = {false}>
                                    {this.ShowRadio()}
                            </ScrollView>
                      </View>
                </View>
            </Content>

       </Container>
           );
   }
  showList(){
   //console.log(arr);
    return arr.map((data, index) => {
      return(

        <View>
          <Image key = {index}
            style={{width: 100, height: 100,}}
            source={{uri: data.channel.imageUrl}}/>
              <View style={{flexDirection:'row', alignItems:'center'}} >
              <Text style = {{margin:5, color:'blue'}} >Spiritual Journey</Text>
              <Text style = {{margin:5, color:'blue'}} >:</Text>
              </View>
        </View>
        // </TouchableOpacity>
      );
    });
  }
        ShowPhoto(){
            return(
              <View>
                <Image source = {voiceDivine}
                  style={{width: 160, height: 160,    alignItems: 'center',justifyContent:'center',}}/>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style = {{margin:5, textAlign: 'center',color:'black', fontSize:26,fontWeight:'bold'}} ></Text>
                </View>
                </View>
              );
            }


        ShowNews(){
          return(
            <View>
              <Image source = {newsDivine}
                style={{width: 150, height: 150,    alignItems: 'center',justifyContent:'center',}}/>
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{margin:5, textAlign: 'center',color:'black', fontSize:26,fontWeight:'bold'}} ></Text>
              </View>
              </View>
            );
          }

                  ShowKids(){
                    return(
                      <View>
                        <Image source = {kidsDivine}
                          style={{width: 150, height: 150,    alignItems: 'center',justifyContent:'center',}}/>
                        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                          <Text style = {{margin:5, textAlign: 'center',color:'black', fontSize:26,fontWeight:'bold'}} ></Text>
                        </View>
                        </View>
                      );
                    }
                    ShowRadio(){
                      return(
                        <View>
                          <Image source = {voiceDivine}
                            style={{width: 150, height: 150,    alignItems: 'center',justifyContent:'center',}}/>
                          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style = {{margin:5, textAlign: 'center',color:'black', fontSize:26,fontWeight:'bold'}} ></Text>
                          </View>
                          </View>
                        );
                      }
  render(){
    const drawerStyles = {
        drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
        main: {paddingLeft: 3}}
    return(
        <Drawer
          type="overlay"
          content={<ControlPanel/>}
          ref={(ref) => this._drawer = ref}
          tapToClose={true}
          openDrawerOffset={.3} // 20% gap on the right side of drawer
          panCloseMask={0.5}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          tweenHandler={(ratio) => ({main: { opacity:(2-ratio)/2 }})}
        >
          <NavBar title="Home" onClick={this.openControlPanel.bind(this)} />
          {this.showMainView()}
        </Drawer>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'white'
  },
})
