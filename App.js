import React ,{useState,useEffect}from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './src/componnents/DrawerContent';
import MainTabScreen from './src/screens/MainTabScreen';
import { AuthContext } from './src/componnents/context';
import RootStackScreen from './src/screens/RootStackScreen';
import auth from '@react-native-firebase/auth';

const Drawer = createDrawerNavigator();

const App=()=> {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const [user,setUser]=useState(null);
  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

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
  signIn:async(foundUser)=>{
    const userToken = String(foundUser[0].userToken);
    const userName = foundUser[0].username;
    try{
       await auth().signInWithEmailAndPassword(email,password);
    }
    catch(e){
        console.log(e);
    }
    dispatch({ type: 'LOGIN', id: userName, token: userToken });
},
  signOut:  async ()=>{
    try{
        await auth().signOut();
    }
    catch(e){
        console.log(e);
    }
    dispatch({ type: 'LOGOUT' });
},
  signUp:async (email,password)=>{
    try{
        await auth().createUserWithEmailAndPassword(email,password);
    }
    catch(e){
        console.log(e);
    }
},
  toggleTheme:()=>{
    setIsDarkTheme(isDarkTheme=>!isDarkTheme);
  }
}),[]);

useEffect(() => {
  setTimeout(async() => {
    // setIsLoading(false);
    let userToken;
    userToken = null;
    try {
      userToken = await AsyncStorage.getItem('userToken');
    } catch(e) {
      console.log(e);
    }
    // console.log('user token: ', userToken);
    dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
  }, 1000);
}, []);
if( loginState.isLoading ) {
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large"/>
    </View>
  );
}

 const isLoggedIn=false;
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
        { loginState.userToken !== null ? 
          (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
            </Drawer.Navigator>
          ):
            <RootStackScreen/>
        }
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}
export default App;