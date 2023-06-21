import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const PokemonDetailsScreen = ({ route }) => {
  const { name } = route.params;
  const { url } = route.params;
  const { element } = route.params;

  const [backgroundImgPoke, setBackgroundImgPoke] = useState('https://cdn.discordapp.com/attachments/761848868034969640/1121023405894934598/bg.png')

  useEffect(() => {
    if (element && element.length > 0) {
      if (element[0] === 'fire') {
        setBackgroundImgPoke('https://cdn.discordapp.com/attachments/761848868034969640/1121030288789737473/Screenshot_2566-06-21_at_17.54.00.png')
      } else if (element[0] === 'water') {
        setBackgroundImgPoke('https://cdn.discordapp.com/attachments/761848868034969640/1121034459312050247/dhszyu1owji11.png')
      } else if (element[0] === 'bug') {
        setBackgroundImgPoke('https://cdn.discordapp.com/attachments/761848868034969640/1121035413633646602/4589154-pokmon-video-games-pixel-art-pixels.png')
      } else if (element[0] === 'poison') {
        setBackgroundImgPoke('https://cdn.discordapp.com/attachments/761848868034969640/1121036788530675712/Cave-Battle-Background-by-ansimuz.png')
      }
      // } else if (element[0] === 'electric') {
      //   setElementColor('#EDEB55');
      //   setBackgroundCard('#F5E636');
      // } else if (element[0] === 'fairy') {
      //   setElementColor('#FC74DB');
      //   setBackgroundCard('#EE92D8');
      // } else if (element[0] === 'fighting') {
      //   setElementColor('#2F398B');
      //   setBackgroundCard('#4668F3');
      // } else if (element[0] === 'psychic') {
      //   setElementColor('#8B732F');
      //   setBackgroundCard('#B59847');
      // } else if (element[0] === 'rock') {
      //   setElementColor('#5F5F5F');
      //   setBackgroundCard('#818181');
      // } else if (element[0] === 'ghost') {
      //   setElementColor('#2B1F45');
      //   setBackgroundCard('#4A3B6A');
      // }
    }
  }, [element]);

  function capitalizeFirstLetter(string1) {
    return string1.charAt(0).toUpperCase() + string1.slice(1);
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
              <Text style={{ fontSize: 18, fontWeight: '500' }}>You found  </Text>
              {capitalizeFirstLetter(name)} !
            </Text>
          </View>
          <Image
            style={styles.logo}
            source={{
              uri: url,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default PokemonDetailsScreen;

const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
    marginTop: 420,
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: '400',
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
  }
});
