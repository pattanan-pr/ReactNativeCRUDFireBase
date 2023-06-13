import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {ThemeProvider, Button, Input, Image} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import themestyle from '../style/theme_peerapat';

const AddUserScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const addNewUser = () => {
    firestore()
      .collection('react-native-crud')
      .add({
        name: name,
        age: age,
      })
      .then(() => {
        console.log('User added!');
        setAge(0);
        setName('');
      });
  };

  const fetchData = async () => {
    try {
      const querySnapshot = await firestore()
        .collection('react-native-crud')
        .get();

      querySnapshot.forEach(doc => {
        console.log(doc.data());
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();

  const handleNameChange = (value: string): void => {
    setName(value);
  };
  const handleAgeChange = (value: int): void => {
    setAge(value);
  };
  console.log(name, age);
  return (
    <ThemeProvider theme={theme}>
      <ScrollView style={styles.container}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
          }}
          style={{width: 230, height: 200}}
          containerStyle={{marginLeft: 'auto', marginRight: 'auto'}}
        />
        <Input
          placeholder="Name"
          onChangeText={handleNameChange}
          value={name}
        />
        <Input placeholder="age" onChangeText={handleAgeChange} value={age} />

        <Button
          title="Add user"
          buttonStyle={themestyle.typography.ButtonM}
          onPress={addNewUser}
        />
        <Button
          title="Go to user List"
          buttonStyle={themestyle.typography.ButtonS}
          containerStyle={{marginTop: 15}}
          onPress={() => navigation.navigate('UserScreen')}
        />
      </ScrollView>
    </ThemeProvider>
  );
};

const theme = {
  Button: {
    raised: true,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});

export default AddUserScreen;
