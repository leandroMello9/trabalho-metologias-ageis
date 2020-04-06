import React from 'react';
import { View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// import { Container } from './styles';

export default function Form({
  nameIcon,
  sizeIcon,
  colorIcon,
  placeholder,
  bottom,
  editable,
  value,
  onChange,
}) {
  return (
    <View
      style={{
        width: 350,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: bottom ? 35 : 0,
      }}
    >
      <View
        style={{
          backgroundColor: '#3b4145',
          width: 50,
          height: 50,
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MaterialIcons name={nameIcon} size={sizeIcon} color={colorIcon} />
      </View>
      <View style={{ width: 350, left: 15 }}>
        <TextInput
          placeholder={placeholder}
          editable={editable}
          value={value}
          onChangeText={onChange}
        />
      </View>
    </View>
  );
}
