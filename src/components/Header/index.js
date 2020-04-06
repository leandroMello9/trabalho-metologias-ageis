import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Header() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        right: 16,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View>
          <Text style={{ fontSize: 35, color: '#ebebeb' }}>12</Text>
        </View>
        <View style={{ marginLeft: 8 }}>
          <Text style={{ fontWeight: 'bold', top: 5, color: '#ebebeb' }}>
            JAN
          </Text>
          <Text style={{ color: '#ebebeb' }}>2016</Text>
        </View>
      </View>
      <View />
      <Text style={{ color: '#ebebeb' }}>Segunda</Text>
    </View>
  );
}
