import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../constants/color';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors,
  },
});
