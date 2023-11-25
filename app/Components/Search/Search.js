import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="white" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search Products or store"
        placeholderTextColor="#888" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#163075',
    borderRadius: 50,
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 56,
    color: '#8891A5', 
  },
});

export default SearchInput;
