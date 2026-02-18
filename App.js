import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandlordPage from './app/landlord'; // Ensure the correct path
import RoomManagement from './app/landlord/RoomManagement'; // Ensure the correct path

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandlordPage">
        <Stack.Screen name="LandlordPage" component={LandlordPage} />
        <Stack.Screen name="RoomManagement" component={RoomManagement} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="AddRoom" component={AddRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
