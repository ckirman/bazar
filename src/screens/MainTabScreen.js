import React from 'react';
import {StatusBar} from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import CategoriesScreen from './CategoriesScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import FavouriteScreen from './FavouriteScreen';



const HomeStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const CartStack = createStackNavigator();
const FavouriteStack=createStackNavigator();
const ProfileStack=createStackNavigator();
;

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
        
          tabBarLabel: 'Ana Sayfa',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Kategoriler"
        component={CategoriesStackScreen}
        options={{
          tabBarLabel: 'Kategoriler',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="search-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoriler"
        component={FavouriteStackScreen}
        options={{
          tabBarLabel: 'Favoriler',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="heart-outline" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Cart"
        component={CartStackScreen}
        options={{
          tabBarLabel: 'Sepet',
          tabBarColor: '#ffc000',
          tabBarIcon: ({ color }) => (
            <Icon name="cart-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    
     
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        
        title:'Ana Sayfa',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const CategoriesStackScreen = ({navigation}) => (
<CategoriesStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <CategoriesStack.Screen name="Kategoriler" component={CategoriesScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</CategoriesStack.Navigator>
);
const FavouriteStackScreen = ({navigation}) => (
    <FavouriteStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#d02860',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <FavouriteStack.Screen name="Favoriler" component={FavouriteScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#d02860" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </FavouriteStack.Navigator>
    );

const CartStackScreen = ({navigation}) => (
    <CartStack.Navigator screenOptions={{
            
            headerStyle: {
            backgroundColor: '#ffc000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <CartStack.Screen name="Sepet" component={CartScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#ffc000" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </CartStack.Navigator>
    );
    const ProfileStackScreen = ({navigation}) => (
      <ProfileStack.Navigator screenOptions={{
              headerStyle: {
              backgroundColor: '#694fad',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold'
              }
          }}>
              <ProfileStack.Screen name="Profil" component={ProfileScreen} options={{
              headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} backgroundColor="#694fad" onPress={() => navigation.openDrawer()}></Icon.Button>
              )
              }} />
      </ProfileStack.Navigator>
      );
     