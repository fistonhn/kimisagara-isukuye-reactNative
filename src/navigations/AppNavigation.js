import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 

import PostScreen from '../screens/Post/AddPost';
import HomeScreen from '../screens/Home/HomeScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import SearchScreen from '../screens/Search/SearchScreen';
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import LandingScreen from '../screens/LandingScreen/LandingScreen';

 const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Ahabanza' component={HomeScreen} />
      <Stack.Screen name='Inkuru zose' component={LandingScreen} />
      <Stack.Screen name='Inkuru irambuye' component={RecipeScreen}/>
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='Kwinjira' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='Andika inkuru' component={PostScreen} />
    </Stack.Navigator>
  )
} 



 const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 


 export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 
 

console.disableYellowBox = true;