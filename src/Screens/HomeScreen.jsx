import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../constants/color';
import MenuBar from '../assets/svg/MenuBar';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'white'}}>Home Screen</Text>
      <MenuBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
