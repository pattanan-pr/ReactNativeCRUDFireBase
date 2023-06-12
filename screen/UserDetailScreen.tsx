import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {ThemeProvider, Button, Input, Image} from 'react-native-elements';

const UserDetailScreen = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScrollView style={styles.Container}>
        <Input placeholder={'Name'} />
        <Input placeholder={'Email'} />
        <Input placeholder={'Mobile'} />
        <Button title={'update'} />
        <Button
          title="Delete"
          buttonStyle={{backgroundColor: 'red'}}
          containerStyle={{marginTop: 15}}
        />
      </ScrollView>
    </ThemeProvider>
  );
};

export default UserDetailScreen;

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
