import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import Listing from './screens/Listing';
import Queues from './screens/Queues';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Listing" component={Listing} ></Stack.Screen>
        <Stack.Screen name="Queues" component={Queues} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

});
