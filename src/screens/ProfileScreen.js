import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

const ProfileScreen  = ({navigation}) => {
  
  const { colors } = useTheme();
  const theme = useTheme();

    return (
      <View style={styles.container}>
        
        <Text style={{color: colors.text}}>Profile Screen</Text>
      </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});