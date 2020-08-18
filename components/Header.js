import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Excel Reader</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'yellow',
  },
  text: {
    color: 'darkslateblue',
    textAlign: 'center',
  },
});

export default Header;
