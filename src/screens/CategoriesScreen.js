import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Kategoriler ekranı</Text>
        <Button
            title="Kategorilere tekrar gir"
            onPress={() => navigation.push("Kategoriler")}
        />
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});