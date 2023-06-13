import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import themestyle from '../style/theme_peerapat';

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
        <View style={styles.container}>
          <Text style={themestyle.typography.Subtitle1}>
            ✎ name: {user.name} <Text>Age:</Text>{' '}
            <Text style={[{color: themestyle.colors.info.main},themestyle.typography.Subtitle1]}>{user.age}</Text>
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
    paddingBottom:20,
  },
});
