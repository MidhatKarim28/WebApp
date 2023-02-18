 
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Pressable } from 'react-native';

export default function App(props){  
  const [email, setEmail] = useState('Email');
  const [name, setName] = useState('Name');
  const handlePress = () => false;
  const { onPress, title = 'Create Session' } = props;
    return (  
      <ScrollView style = {{backgroundColor: '#f0f4f5'}}>
             <View style = {styles.container}>
                <Text style = {styles.textTitle}>
                    Create Session
                </Text>
                <Text style = {styles.labels}>Enter Email</Text>
                <TextInput 
                  placeholder='Email' 
                  style={styles.input}
                  onChangeText={(value) => setEmail(value)} />

                <Text style = {styles.labels}>Enter Session Name</Text>
                <TextInput
                  placeholder='Session Name' 
                  style={styles.input}
                  onChangeText={(value) => setName(value)} />

                <Pressable style={styles.button} onPress={onPress}>
                      <Text style={styles.text}>{title}</Text>
                </Pressable>

                <Image
                  style={styles.image}
                  source={require("../assets/session.png")}
                />
             </View>
        </ScrollView> 
    );  
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 40,
      alignItems: 'center'
  },

  image:{
    height:"35%",
    width:"55%",
    resizeMode:'contain',
    alignSelf:'center',
    marginVertical: '5%'
  },

  textTitle: {
      fontSize: 40,
      marginVertical: '5%' ,
      textAlign: 'center',
  },
  input: {
    borderWidth:1,
    borderColor:"rgba(0,0,0,0.3)",
    marginLeft:'4%',
    marginRight:'4%',
    paddingHorizontal:15,
    width:"40%",
    paddingVertical:10,
    borderRadius:1,
    backgroundColor:"white",
    fontSize:18,
  },

  labels: {
    fontSize: 16,
    textAlign: 'left',
    padding: 20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F86464",
    padding: 10,
    borderRadius:30,
    width:"40%",
    marginTop:"2%",
    alignSelf:'center'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: '0.25%',
    color: 'white',
  },

});