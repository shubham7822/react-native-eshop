import React from 'react';
import { View, StyleSheet } from 'react-native';
import Dropdown from '../custom/Dropdown';
import SearchInput from './Search/Search';
import TopNav from './TopNav/TopNav';

const Header = () => {
  return (
    <View style={[styles.container, { zIndex: 1 }]}>
      <TopNav />
      <SearchInput/>
      <View style={styles.dropdownContainer}>
        <Dropdown  label="Delivery To" options={[{name:"Green Way 3000, Sylhet",key:1},{name:"Gandhi Bagh,Nagpur",key:2}]}/>
        <Dropdown  label="With In" options={[{name:"1 hour",key:1},{name:"2 hour",key:2}]}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    paddingTop:40,
    borderRadius:10,
    backgroundColor: '#2B4BA1',
    height:280,
  },
  dropdownContainer: {
    display:'flex',
    marginTop:30,
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    flexDirection:'row'
  }
});

export default Header;
