import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import Deliveries from './pages/Deliveries';
import Order from './pages/Order';
import Profile from './pages/Profile';
import NewProblem from './pages/NewProblem';
import Problems from './pages/Problems';
import Confirm from './pages/Confirm';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Deliveries"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999',
        style: {
          borderTopWidth: 0,
          elevation: 4,
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="Deliveries"
        component={Deliveries}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="menu" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function OrderStack() {
  return (
    <Stack.Navigator
      initialRouteName="OrderDetails"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7D40E7',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#fff',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="OrderDetails" component={Order} />
      <Stack.Screen name="NewProblem" component={NewProblem} />
      <Stack.Screen name="Problems" component={Problems} />
      <Stack.Screen name="Confirm" component={Confirm} />
    </Stack.Navigator>
  );
}

export default (signedIn = false) => () => (
  <NavigationContainer>
    {signedIn ? (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Order"
          component={OrderStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    ) : (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    )}
  </NavigationContainer>
);
