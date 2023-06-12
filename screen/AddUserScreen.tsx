import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {ThemeProvider, Button, Input, Image} from 'react-native-elements';
// import {Icon} from 'react-native-elements/FontAwesome';
import firestore from '@react-native-firebase/firestore';

const AddUserScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  // function onResult(QuerySnapshot) {
  //   fetchData();
  //   console.log('Got Users collection result.');
  // }

  // function onError(error) {
  //   console.error(error);
  // }

  // firestore().collection('react-native-crud').onSnapshot(onResult, onError);

  const addNewUser = () => {
    firestore()
      .collection('react-native-crud')
      .add({
        name: name,
        age: age,
      })
      .then(() => {
        console.log('User added!');
        setAge(0)
        setName('')
      });
  };

  // const userDocument = async () => {
  //   await firestore()
  //     .collection("react-native-crud")
  //     .doc('ymHNdV6IHU75cLBRhSUF')
  //     .get();
  // };

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

  // const db = firestore();
  // db.collection('react-native-crud')
  //   .doc('ymHNdV6IHU75cLBRhSUF')
  //   .get()
  //   .then(function (doc) {
  //     console.log(doc.data().name);
  //   })
  //   .catch(function (error) {
  //     console.error('Error fetching data:', error);
  //   });
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
          buttonStyle={{backgroundColor: 'green'}}
          onPress={addNewUser}
        />
        <Button
          title="Go to user List"
          containerStyle={{marginTop: 15}}
          onPress={() => navigation.navigate('UserScreen')}
        />
        <Button
          title="Go to user Detail"
          containerStyle={{marginTop: 15}}
          onPress={() => navigation.navigate('UserDetail')}
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
