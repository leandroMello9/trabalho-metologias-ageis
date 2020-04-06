import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// import { Container } from './styles';

export default function Button({
  label,
  iconName,
  iconColor,
  backgroundColor,
  iconSize,
  labelColor,
  center,
  onPress,
  width,
  height,
  borderRadius,
  rigth,
  left,
}) {
  return (
    <View
      style={{
        width: '33%',

        height: 80,
        marginTop: 80,
        right: rigth,
        left,
        justifyContent: 'space-around',
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor,
          borderRadius,
          width,
          height,
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              alignSelf: 'center',
              height,
              justifyContent: center ? 'center' : 'flex-start',
            }}
          >
            <MaterialIcons name={iconName} color={iconColor} size={iconSize} />
          </View>
          <Text
            style={{
              width: 200,
              paddingHorizontal: 35,
              fontSize: 13,
              left: center ? 40 : 15,
              bottom: 25,
              alignSelf: 'center',
              color: labelColor,
            }}
            numberOfLines={2}
          >
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
