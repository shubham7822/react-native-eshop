import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import HideWithKeyboard from 'react-native-hide-with-keyboard';


// const height = Dimensions.get("window").height;

const Footer = () => {

  return (
    <HideWithKeyboard>
    <View elevation={20} style={styles.footerContainer}>
      <TouchableOpacity style={styles.container}>
        <Icon name="home" size={20}  color="lightgray" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
      <Icon name="th-large" size={20} color="lightgray"/>
      <Text style={styles.iconText}>categories</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Icon name="heart" size={20}  color="lightgray" />
        <Text style={styles.iconText}>Favorite</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Icon name="ellipsis-v" size={20} color="lightgray" />
        <Text style={styles.iconText}>More</Text>
      </TouchableOpacity>
    </View>
    </HideWithKeyboard>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderRadius: 30,
    borderTopColor:'#F8F9FB',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    fontSize: 12,
    color: '#8791A5',
  },
});

export default Footer;
