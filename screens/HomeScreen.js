import { StyleSheet, Text, View } from 'react-native'
import { BottomNavigation } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import Inventory from './Inventory'
import Sales from './Sales'
import Expenses from './Expenses'
import Report from './Report'

 
const HomeScreen = () => {

  const [index, setIndex] = React.useState(0);

  const renderScene = BottomNavigation.SceneMap({
    Inventory: Inventory,
    Sales: Sales,
    Expenses: Expenses,
    Reports: Report,
  });

  const renderBottomNavigation = () => (
    <BottomNavigation
     onIndexChange={setIndex}
      renderScene={renderScene}

      activeColor="#ffffff"
      inactiveColor="#ffffff"
      barStyle={{ backgroundColor: '#0d0148' }}
      labelStyle={{ fontSize: 18, color: '#fff' }}

      navigationState={{
        index,
        routes: [
          { key: 'Sales', title: 'Sales', icon: ({color, size}) => (
            <MaterialCommunityIcons name="trending-up" color="#fff" size={18} />
          )},
          { key: 'Inventory', title: 'Inventory', icon: ({color, size}) => (
            <MaterialCommunityIcons name="barcode-scan" color="#fff" size={18} />
          )},
          { key: 'Expenses', title: 'Expenses', icon: ({color, size}) => (
            <MaterialCommunityIcons name="printer" color="#fff" size={18} />
          )},
          { key: 'Reports', title: 'Reports', icon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color="#fff" size={18} />
          )},
        ],
      }}
    />
  );

 


  return (
    <View style={styles.container}> 
    <StatusBar style="dark" backgroundColor="#fff" />
      {renderBottomNavigation()}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})