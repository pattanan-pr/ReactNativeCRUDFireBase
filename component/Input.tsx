import {View, TextInput, Platform} from 'react-native';
import React from 'react';

interface InputType {
  textholder: string;
  onChangeText?: (text: string) => void;
  color: string;
}

const Input: React.FC<InputType> = ({textholder, onChangeText, color}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: color,
        paddingHorizontal: 14,
        paddingVertical: Platform.OS === 'android' ? 13 : 16,
        backgroundColor: 'white',
      }}>
      <TextInput
        placeholder={textholder}
        keyboardType="ascii-capable"
        onChangeText={onChangeText}
        placeholderTextColor={'#7C7C7C'}
        textAlignVertical="center"
        style={{
          width: '100%',
          alignItems: 'flex-start',
          color: 'black',
          padding: 0,
        }}
      />
    </View>
  );
};

export default Input;
