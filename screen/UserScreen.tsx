import {View, Text, ScrollView, StyleSheet} from 'react-native';
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
        <View key={user.id} style={styles.container}>
          <Text style={styles.title}>
            Name: {user.name} <Text>Age: {user.age}</Text>
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginBottom: 30,
  },
});
