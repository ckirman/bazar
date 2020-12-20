import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CartScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Sepet Ekranı</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});