import React from 'react';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Settings from './screens/Settings'
import HomeScreen from './screens/HomeScreen';
import CashFlow from './screens/CashFlow';
import Master from './screens/Master';


const Drawer = createDrawerNavigator();


export default function App() {
   const backgroundImg = require('./assets/back.png')
 
  return (
    <NavigationContainer>
      <Drawer.Navigator
      drawerContent={
        (props) => {
          return(
            <SafeAreaView>
              <ImageBackground
              source={backgroundImg}
              style={{
                height: 150,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: '#8c8544',
                backgroundColor: '#8c8544'
              }}
              >
              </ImageBackground>
              <DrawerItemList {...props} />
            </SafeAreaView>
          )
        }
      }
      screenOptions={{
        drawerStyle:{
          backgroundColor: '#ffffff',
          width: 250
        },
        headerStyle:{
          backgroundColor: '#0d0148',
        },
        barStyle:{
          color: '#fff',
          backgroundColor: "#fff",
        },
        headerTintColor:'#ffffff',
        headerTitleStyle:{
          fontWeight: 'bold',
        },
        drawerLabelStyle:{
          color: '#111111',
        },
      }}
      >
        <Drawer.Screen 
        name='HomeScreen'
        component={HomeScreen} 
        options={{
          title: 'Home',
         drawerIcon: () => (
          <Ionicons name="md-home" size={30} color="#8888ff" />
        ),
        headerTitle: 'ZigTech Pvt Ltd',
        }} 
        
        />

         <Drawer.Screen 
        name='CashFlow'
        component={CashFlow} 
        options={{
          title: 'Cashflow',
         drawerIcon: () => (
          <Ionicons name="sync" size={30} color="#8888ff" />
        ),
        headerTitle: 'Cashflow',
        }} 
        />

         <Drawer.Screen 
        name='Master'
        component={Master} 
        options={{
          title: 'Master',
         drawerIcon: () => (
          <Ionicons name="business" size={30} color="#8888ff" />
        ),
        headerTitle: 'ZigTech Pvt Ltd',
        }} 
        />

        <Drawer.Screen 
        name='Settings'
        component={Settings} 
        options={{
          title: 'Settings',
         drawerIcon: () => (
          <Ionicons name="settings" size={30} color="#8888ff" />
        ),
        headerTitle: 'Settings',
        }} 
        />

       

      </Drawer.Navigator>
    </NavigationContainer>
  )};
