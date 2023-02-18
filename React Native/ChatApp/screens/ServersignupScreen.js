import { StyleSheet, Text,TouchableOpacity,TextInput,Button, Alert,Image,View ,SafeAreaView} from 'react-native';
import React from 'react'

function ServersignupScreen(){
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

const Screen = (props) => {
  return (
  <View>
  <Text style={styles.header}>Create An Account</Text>
  <View style={styles.inputcon1}>
  <Text style={styles.email}>Enter Email:</Text>
  <TextInput
  style={styles.input}
  placeholder="Enter you Email"
  keyboardType="email-address"
  autoCapitalize='none'
  autoCorrect={false}
/>
  </View>
  <View style={styles.inputcon1}>
  <Text style={styles.email}>Enter Your Password:</Text>
  <TextInput
  style={styles.input}
  autoCapitalize='none'
  autoCorrect={false}
  secureTextEntry={true}
/>
  </View>
  
  <View style={styles.inputcon1}>
  <Text style={styles.email}>Confirm Password:</Text>
  <TextInput
  style={styles.input}
  autoCapitalize='none'
  autoCorrect={false}
  secureTextEntry={true}
/>
  </View>
  <View style={styles.inputcon1}>
  <Text style={styles.email}>Enter Reference Key:</Text>
  <TextInput
  style={styles.input}
  placeholder="Enter Reference Key"
  autoCapitalize='none'
  autoCorrect={false}
/>
  </View>
  <View style={styles.buts}>
  <TouchableOpacity
  style={styles.button1}
  onPress={() => navigation.navigate('Login')}
  >
  <Text style={styles.tbut}>Create Account</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.button1}
  onPress={() => navigation.navigate('VendorHome')}
  >
  <Text style={styles.tbut}>Return</Text>
</TouchableOpacity>

  </View>
  



</View>
  )
}

export default ServersignupScreen

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
    tbut:{color:'white'}
    ,
    buts:{
        marginTop:'8%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
    ,
    button1:{
        alignItems: "center",
        backgroundColor: "#F86464",
        padding: 10,
        borderRadius:30,
        width:"40%"

    }

    ,
    inputcon1:
    {
        marginTop:'5%',

    },
    email:{

        paddingLeft:'5%',
        fontSize:18,
        paddingBottom:'2%'
    },
    input:{
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.3)",
        marginLeft:'4%',
        marginRight:'4%',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:1,
        backgroundColor:"white",
        fontSize:18,
    },

  });