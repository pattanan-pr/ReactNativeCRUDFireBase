import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const UserScreen = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const querySnapshot = await firestore()
        .collection('react-native-crud')
        .get();

      const data = querySnapshot.docs.map(doc => doc.data());
      setUserData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();

  return (
 <ScrollView>
      {userData.map(user => (
        <View key={user.id}>
          <Text>Name: {user.name}</Text>
          <Text>Age: {user.age}</Text>
        </View>
      ))}
    </ScrollView>
  );
};


export default UserScreen;
