import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  ImageBackground,
} from 'react-native';

const PokemonDetailsScreen = ({route}) => {
  // const {name} = route.params;
  // const {url} = route.params;
  // const {element} = route.params;
  // const {weight} = route.params;
  // const {height} = route.params;
  // const { ability } = route.params;
  const {name, url, element, weight, height, ability} = route.params;
  const jumpValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startJumpAnimation();
  }, []);

  const startJumpAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(jumpValue, {
          toValue: -50,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(jumpValue, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const [backgroundImgPoke, setBackgroundImgPoke] = useState(
    'https://cdn.discordapp.com/attachments/761848868034969640/1121023405894934598/bg.png',
  );

  useEffect(() => {
    if (element && element.length > 0) {
      if (element[0] === 'fire') {
        setBackgroundImgPoke(
          'https://cdn.discordapp.com/attachments/761848868034969640/1121030288789737473/Screenshot_2566-06-21_at_17.54.00.png',
        );
      } else if (element[0] === 'water') {
        setBackgroundImgPoke(
          'https://cdn.discordapp.com/attachments/761848868034969640/1121034459312050247/dhszyu1owji11.png',
        );
      } else if (element[0] === 'bug') {
        setBackgroundImgPoke(
          'https://cdn.discordapp.com/attachments/761848868034969640/1121035413633646602/4589154-pokmon-video-games-pixel-art-pixels.png',
        );
      } else if (element[0] === 'poison') {
        setBackgroundImgPoke(
          'https://cdn.discordapp.com/attachments/761848868034969640/1121036788530675712/Cave-Battle-Background-by-ansimuz.png',
        );
      } else if (element[0] === 'electric') {
        setBackgroundImgPoke(
          'https://cdn.discordapp.com/attachments/761848868034969640/1121468603108167821/Professor_Oaks_Laboratory_-_Bulbapedia_the_community-driven_Pokemon_encyclopedia.png',
        );
      }
    }
  }, [element]);

  function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const image = {
    uri: backgroundImgPoke,
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.containerImg}>
          <View style={styles.box}>
            <Text style={styles.text}>
              <Text style={{fontSize: 18, fontWeight: '500'}}>You found </Text>
              {capitalizeFirstLetter(name)} !
            </Text>
          </View>

          <View style={styles.Textcontainer}>
            <Text style={styles.text2}>Weight: {weight} </Text>
            <Text style={styles.text2}>Height: {height} </Text>
            <Text style={styles.text2}>
              Ability: {capitalizeFirstLetter(ability)}{' '}
            </Text>
          </View>
          <Animated.View
            style={[
              styles.animatedImageContainer,
              {transform: [{translateY: jumpValue}]},
            ]}>
            <Image style={styles.logo} source={{uri: url}} />
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PokemonDetailsScreen;

const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
    marginTop: 300,
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  Textcontainer: {
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 2,
    paddingHorizontal: 18,
    backgroundColor: '#F3F3F3',
    marginHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 14,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: '400',
  },
  text2: {
    fontSize: 14,
    fontWeight: '500',
  },
  logo: {
    width: 400,
    height: 340,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 2,
    paddingHorizontal: 18,
    backgroundColor: 'white',
  },
});
