import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from '../component/Input';
import Card from '../component/Card';
import axios from 'axios';

const Pokemon = () => {
  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=20',
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // fetchData();

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data.results, 'o;ewfwneofbnowbowbeogebwooewf');

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topper}>
          <Text style={styles.text}>POKEDEX</Text>
          <View style={{marginTop: 10}}>
            <Input textholder="Name or type" color="#ccc" />
          </View>
        </View>
        <View style={styles.card}>
          <Card color="pink" name="pikachu" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Pokemon;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: '800',
    paddingVertical: 20,
    color: 'white',
  },
  topper: {
    height: 160,
    backgroundColor: '#20B2AA',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  card: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
