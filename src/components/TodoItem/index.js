import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// import { Container } from './styles';

export default function TodoItem({ item, navigation }) {
  const { todo } = item;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('InfoItem', { item })}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',

        marginBottom: 15,
      }}
    >
      <View style={{ width: 180, height: 50 }}>
        <Text style={{ fontSize: 14, color: '#ebebeb' }} numberOfLines={2}>
          {todo.name}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          borderWidth: 4,
          width: 30,
          height: 30,
          borderRadius: 30,
          borderColor: item.status ? '#98FB98' : '#eee',
        }}
      >
        <View style={{ alignSelf: 'center' }}>
          {todo.status ? (
            <MaterialIcons name="check" size={22} color="#98FB98" />
          ) : null}
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
