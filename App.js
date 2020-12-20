import { StatusBar } from 'expo-status-bar';
import React ,{useEffect}from 'react';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';
import {NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import {DrawerContent} from './src/componnents/DrawerContent';
import MainTabScreen from './src/screens/MainTabScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import CartScreen from './src/screens/CartScreen';
import ProfileScreen from './src/screens/ProfileScreen';


import { AuthContext } from './src/componnents/context';

import RootStackScreen from './src/screens/RootStackScreen';

import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

const App=()=> {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
const authContext =React.useMemo(()=>({
  toggleTheme:()=>{
    setIsDarkTheme(isDarkTheme=>!isDarkTheme);
  }
}),[]);

 const state1=true;
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
        { state1 !== true ? (
         <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
            <Drawer.Screen name="CategoriesScreen" component={CategoriesScreen}/>
            <Drawer.Screen name="CartScreen" component={CartScreen}/>
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen}/>
          </Drawer.Navigator>
          )
          :
            <RootStackScreen/>
          }
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}
export default App;