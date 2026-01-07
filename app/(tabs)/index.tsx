import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import LoginScreen from '@/components/LoginScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <AppHeader />
        <LoginScreen /> 
      </View>
      <View style={styles.footerContainer}>
        <AppFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});
