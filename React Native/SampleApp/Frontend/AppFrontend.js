import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'
import React,{ useEffect,useState } from 'react';

function HomeScreen({navigation}){
  return(
    <View>
      <Text>Home Screen</Text>
      <Button title='View all Users' onPress={()=>navigation.navigate('DetailScreen')}/>
      <Button title='Add New User' onPress={()=>navigation.navigate('SignUpScreen')}/>
    </View>
  )
}

function DetailScreen(){
  const [Users, getUsers] = useState('');

  const getAllUsers= async ()=>{
    // React native doesnt allow to work with local host so you need to get you apis
    await axios.get('http://192.168.56.1:3300/users').then((response)=>{
      console.log(response.data)
      const allUsers=response.data
      getUsers(allUsers)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  useEffect(()=>{
    getAllUsers();
  },[]);

  return(
    <View>
      <Text>Detail Screen</Text>
      <View style={{marginTop:5}}>
        {
          Users.length>0?
          <View>
            {
              Users.map((item)=>
              <Text>{item.email}</Text>)
            }
            </View>
            :<Text>Data is loading</Text>
        }
       


      </View>
    </View>
  )
};

function SignUpScreen(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const SignUp= async ()=>{
      // React native doesnt allow to work with local host so you need to get you apis
      axios.post('http://192.168.56.1:3300/signup', {
        name : "Frontend",
        email: 'frontend@gmail.com'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    useEffect(()=>{
      SignUp();
    },[]);


  return(
    <View>
      <Text>SignUp Screen</Text>
      <View style={{marginTop:5}}>
        {
          <Text> SignUp Done</Text>
        }
      </View>
    </View>
  )
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name="Home" component={HomeScreen} ></Stack.Screen>
        <Stack.Screen name="DetailScreen" component={DetailScreen} ></Stack.Screen>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
