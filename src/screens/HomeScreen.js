
import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import SplashScreen from './SplashScreen';
const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text}}>Home Screen</Text>
      <Button
        title="Kategorilere git"
        onPress={() => navigation.navigate("Kategoriler")}
      />
    
     
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});