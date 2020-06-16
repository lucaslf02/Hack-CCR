import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Feather';


import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Elements from "../screens/Elements";
import Articles from "../screens/Articles";


const Tab = createBottomTabNavigator();


function Login(){
    return <Onboarding />
}

export default function App() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'message-square'
            : 'message-square';
        } else if (route.name === 'Onboarding') {
            iconName = focused ? 'shopping-bag' : 'shopping-bag';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }else if (route.name === 'Elements') {
            iconName = focused ? 'alert-triangle' : 'alert-triangle';
          }else if (route.name === 'Articles') {
            iconName = focused ? 'truck' : 'truck';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Onboarding" component={Onboarding} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Elements" component={Elements} />
        <Tab.Screen name="Articles" component={Articles} />
      </Tab.Navigator>
  );
}