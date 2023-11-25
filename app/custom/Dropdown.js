import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Dropdown = ({ label, options }) => {
  const [visible, setVisible] = useState(false);
  const[optionSelected,setOptionSelected] =  useState("")

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      onPress={(e) => {
        toggleDropdown();
        setOptionSelected(item?.name)
      }}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            renderItem={renderItem}
            keyExtractor={(item) => item?.id?.toString()}
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label?.toUpperCase()}</Text>
      <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
        <View>
          <Text  style={styles.buttonText}>{optionSelected || options[0]?.name}</Text>
        </View>
        {/* <Icon type='font-awesome' name='chevron-down'/> */}
      </TouchableOpacity>
      {renderDropdown()}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
   margin:20
  },
  labelText:{
    color:'#92A1CD'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    zIndex: 1,
    color:'white'
  },
  buttonText: {
    flex: 1,
    color: 'white',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 50,
    width:200
  },
});

export default Dropdown;
