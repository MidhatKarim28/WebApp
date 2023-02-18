//type rnfe in order to autocomplete the default page screen 
import { StyleSheet, Text,Button,TouchableOpacity, Alert,Image,View ,SafeAreaView} from 'react-native';
import React from 'react'

export default function WelcomeScreen(){
  return (
    <View style={styles.container}>
       <View style={styles.comb_circle}>
          <View style={styles.circle1}/>
          <View style={styles.circle2}/>
    </View>
    <Screen/>
    </View>
  );
}

const Screen = () => {
  return (
    <View>
        <Text style={styles.header}>Welcome to PJD Chat App</Text>
     <Image style={styles.home}source={require("../assets/home.png")}/>
        <View style={styles.client}>
            <Text style={styles.label}>Start As a Vendor</Text>
            <TouchableOpacity
       style={styles.button1}
       onPress={() => navigation.navigate('VendorHome')}
     >
       <Text style={styles.tbut}>Vendor Side</Text>
     </TouchableOpacity>
        </View>
        <View style={styles.client}>
            <Text style={styles.label}>Start As a User</Text>
            <TouchableOpacity
       style={styles.button1}
       onPress={() => navigation.navigate('CreateSession')}
     >
       <Text style={styles.tbut}>User Side</Text>
     </TouchableOpacity>
        </View>
    </View>
    
  )
}

//type rnss in order to add Style sheets component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F4F4',
  },
    comb_circle:{
      height:'100%',
      width:'100%',
      position:'absolute',
    },
    circle1:{
      width:'39%',
      height:'18%',
      borderRadius: 75,
      opacity:0.48,
      backgroundColor:"#FF6B6B",
      top:'-1%',
      left:'-23%',
      position:'absolute'
    },
    circle2:{
      width:'30%',
      height:'18%',
      borderRadius: 75,
      opacity:0.48,
      top:'-8%',
      left:'-4%',
      backgroundColor:"#FF6B6B"
    },
    header:{
        paddingTop:'25%',
        fontWeight:'bold',
        alignSelf:'center',
        fontSize:25,
    },
    home:{
        height:"45%",
        width:"85%",
        resizeMode:'contain',
        alignSelf:'center',
       marginTop:'10%'

    },
    client:{
        paddingTop:'3%',        
    },
    label:{
        paddingLeft:'5%',
        fontSize:20,
        alignSelf:'center'
    },   
     button1:{
        marginTop:'2%',
        alignSelf:'center',
        alignItems: "center",
        backgroundColor: "#F86464",
        padding: 10,
        borderRadius:30,
        width:"80%"

    }
})
