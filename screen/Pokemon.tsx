import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from '../component/Input';
import Card from '../component/Card';
import axios from 'axios';

const Pokemon = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=100',
      );
      const results = response.data.results;

      const pokemonDataPromises = results.map(async item => {
        const pokemonResponse = await axios.get(item.url);
        const types = pokemonResponse.data.types.map(type => type.type.name);
        const abilities = pokemonResponse.data.abilities
          .map(ability => ability.ability.name)
          .join(', ');
        return {
          name: pokemonResponse.data.name,
          sprite: pokemonResponse.data.sprites.front_default,
          id: pokemonResponse.data.id,
          weight: pokemonResponse.data.weight,
          height: pokemonResponse.data.height,
          abilities: abilities,
          types: types,
        };
      });

      const pokemonData = await Promise.all(pokemonDataPromises);
      setData(pokemonData);
      setFilteredData(pokemonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterData = searchQuery => {
    const filteredPokemon = data.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredData(filteredPokemon);
  };

  const handleInputChange = text => {
    setQuery(text);
    filterData(text);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topper}>
            <Text style={styles.text}>POKEDEX</Text>
            <View style={{marginTop: 10}}>
              <Input
                textholder="Name or type"
                color="#ccc"
                onChangeText={handleInputChange}
              />
            </View>
          </View>
          <View style={styles.card}>
            {filteredData.map((item, index) => (
              <Card
                key={index}
                id={item.id}
                name={item.name}
                url={item.sprite}
                element={item.types}
                weight={item.weight}
                height={item.height}
                ability={item.abilities}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    height: 180,
    backgroundColor: '#20B2AA',
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingTop: 20,
  },
  card: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});
