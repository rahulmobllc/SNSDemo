
import {
    StyleSheet, Dimensions
    
} from "react-native";
const {height, width} = Dimensions.get("window");

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        marginTop:20,
        marginBottom: height*.07
    },
    logo: {
        width: 285,
        height: 175
    },
    inputContainer: {
        marginTop: 10
    },
    input: {
        width: width*.9,
        height: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255 ,0.7)',
        marginHorizontal: 25,
        borderRadius: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkboxStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    checkboxText: {
        width: 50,
        height: 30,
        marginTop: 5,
        color: 'white',
        fontSize: 13
    },
    btnStyle: {
        position: 'absolute',
        top: 8,
        right: 37
    },
    btnLogin: {
        width: width - 95,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'white',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#128ad5',
        fontSize: 16,
        textAlign: 'center'
    },
    socialContainer: {
        justifyContent: 'center'
    },
    socialLogin: {
        width: 120,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    socialGoogle: {
      width: 120,
      height: 40,
      borderRadius: 25,
      backgroundColor: 'white',
      justifyContent: 'space-between',
      marginHorizontal: 10
  },
    socialText: {
        color: '#128ad5',
        fontSize: 26,
        textAlign: 'center'
    }
});
