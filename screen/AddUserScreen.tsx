import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import firebase from '../database/firebaseDb';
import {ThemeProvider, Button, Input, Image} from 'react-native-elements';
import {Icon} from 'react-native-elements/FontAwesome';

const AddUserScreen = ({navigation}) => {
  return (
    <ThemeProvider theme={theme}>
      <ScrollView style={styles.Container}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
          }}
          style={{width: 230, height: 200}}
          containerStyle={{marginLeft: 'auto', marginRight: 'auto'}}
        />
        <Input placeholder={'Name'} />
        <Input placeholder={'Email'} />
        <Input placeholder={'Mobile'} />
        <Button title="Add user" buttonStyle={{backgroundColor: 'green'}} />
        <Button
          title="Goto user List"
          containerStyle={{marginTop: 15}}
          onPress={() => navigation.navigate('UserScreen')}
        />
        <Button
          title="Goto user Detail"
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
  Container: {
    flex: 1,
    padding: 25,
  },
});

export default AddUserScreen;
