import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AppHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Application</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFEE',
  },
  title: {
    color: '#EDEFEE',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
