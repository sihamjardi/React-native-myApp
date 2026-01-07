import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AppFooter: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2026 - React Native TP</Text>
    </View>
  );
};

export default AppFooter;

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EDEFEE',
  },
  footerText: {
    color: '#EDEFEE',
    fontSize: 16,
  },
});
