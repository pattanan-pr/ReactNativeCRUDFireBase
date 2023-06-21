import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Card = ({ color, name }) => {
  return (
    <TouchableOpacity>
      <View style={[styles.card, { backgroundColor: color }]}>
        <View style={styles.detail}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 160,
    width: 200,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#7C7C7C',
  },
  detail: {
    backgroundColor: '#fff',
    height: '100%',
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontSize: 10,
    fontWeight: '400',
  },
});
