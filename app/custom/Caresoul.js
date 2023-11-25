import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Caresoul = ({ images }) => {
  const [active, setActive] = useState(0);

  const handleImgIndex = (idx) => {
    return function () {
      setActive(idx);
    };
  };


  return (
    <View style={styles.container}>
      <View style={styles.slides}>
        {images?.map((e, i) => (
          <Slide key={i} image={e} caption={e} active={i === active} />
        ))}
      </View>
      <View style={styles.bulletedNavigation}>
        {[...new Array(images?.length)].map((_, idx) => {
          return (
            <Dot
              key={idx.toString()}
              isActive={active}
              index={idx}
              handleImgIndex={handleImgIndex(idx)}
            />
          );
        })}
      </View>
    </View>
  );
};

const Dot = ({ isActive, idx, handleImgIndex }) => {
  return (
    <TouchableOpacity style={styles.navigation} onPress={handleImgIndex}>
      <Text style={[isActive === idx ? styles.activeDot : styles.dash]}></Text>
    </TouchableOpacity>
  );
};

const Slide = ({ image, caption, active }) => {
  return (
    <View style={[styles.slide, active && styles.activeSlide]}>
      <Image source={{ uri: image }} style={styles.slideImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slides: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slide: {
    display: 'none',
    alignItems: 'center',
  },
  activeSlide: {
    display: 'flex',
  },
  slideImage: {
    width: 300,
    height: 300,
  },
  bulletedNavigation: {
    flexDirection: 'row',
    position: 'absolute',
    top: '80%',
    left: 0, 
},
dash: {
     marginLeft:20,
    fontSize: 30,
    marginBottom: 5,
    marginRight:10,
    borderWidth:4,
    borderColor:'gray',
    borderRadius:10,
    transform: [{ rotate: '90deg' }],
  },
  activeDot: {
    borderColor: '#F9B023',
    marginLeft:20,
    fontSize: 30,
    marginBottom: 5,
    marginRight:10,
    borderWidth:4,
    transform: [{ rotate: '90deg' }],
  },
  navigation: {
    padding: 10,
  },
});

export default Caresoul;
