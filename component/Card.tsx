import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Card = ({ id, name, url, element }) => {
  const [elementColor, setElementColor] = useState('#ccc');
  const [backgroundCard, setBackgroundCard] = useState('#66E2E4');
  const navigation = useNavigation();

  useEffect(() => {
    if (element && element.length > 0) {
      if (element[0] === 'grass') {
        setElementColor('#60A73C');
        setBackgroundCard('#AFE466');
      } else if (element[0] === 'fire') {
        setElementColor('#E17912');
        setBackgroundCard('#D85A26');
      } else if (element[0] === 'water') {
        setElementColor('#3AAEE8');
        setBackgroundCard('#14CDDC');
      } else if (element[0] === 'bug') {
        setElementColor('#EFCA40');
        setBackgroundCard('#F4C23D');
      } else if (element[0] === 'normal') {
        setElementColor('#A1E7D2');
        setBackgroundCard('#4FC8A4');
      } else if (element[0] === 'poison') {
        setElementColor('#954FC8');
        setBackgroundCard('#AD55ED');
      } else if (element[0] === 'electric') {
        setElementColor('#EDEB55');
        setBackgroundCard('#F5E636');
      } else if (element[0] === 'fairy') {
        setElementColor('#FC74DB');
        setBackgroundCard('#EE92D8');
      } else if (element[0] === 'fighting') {
        setElementColor('#2F398B');
        setBackgroundCard('#4668F3');
      } else if (element[0] === 'psychic') {
        setElementColor('#8B732F');
        setBackgroundCard('#B59847');
      } else if (element[0] === 'rock') {
        setElementColor('#5F5F5F');
        setBackgroundCard('#818181');
      } else if (element[0] === 'ghost') {
        setElementColor('#2B1F45');
        setBackgroundCard('#4A3B6A');
      }
    }
  }, [element]);

  const handleCardPress = () => {
    // Navigate to the Pokemon page using the navigation object
    navigation.navigate('PokemonDetails', { name, url, element});
  };

  console.log(element);
  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View
        style={[
          styles.card,
          {
            backgroundColor: backgroundCard,
          },
        ]}>
        <View style={styles.space}>
          <View style={styles.detail}>
            <View style={styles.textview}>
              <Text style={styles.text2}># {id}</Text>
            </View>
            <Text style={styles.text}>{name}</Text>
            {element && element.length > 0 ? (
              <View style={styles.textContainer}>
                {element.map((item, index) => (
                  <View
                    style={[styles.textview2, { backgroundColor: elementColor }]}
                    key={index}>
                    <Text style={styles.text3}>{item}</Text>
                  </View>
                ))}
              </View>
            ) : null}
          </View>
          <View style={{ paddingRight: 10 }}>
            <Image
              style={styles.logo}
              source={{
                uri: url,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 160,
    width: 190,
    borderRadius: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#ABABAB',
    borderLeftWidth: 2,
    borderLeftColor: '#ABABAB',
    marginBottom: 10,
    marginLeft: 10,
  },
  detail: {
    borderTopRightRadius: 60,
    backgroundColor: '#fff',
    height: '100%',
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 9,
    borderTopLeftRadius: 9,
  },
  text: {
    fontSize: 10,
    fontWeight: '400',
  },
  text2: {
    fontSize: 8,
    fontWeight: '300',
  },
  text3: {
    fontSize: 9,
    fontWeight: '600',
    color: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
  },
  textview: {
    borderColor: '#ccc',
    width: 32,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  textview2: {
    width: 40,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  space: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});
