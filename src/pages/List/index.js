import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import Header from '../../components/Header';

function List({ navigation, list }) {
  const data = [
    { id: '1', name: 'Hoej irei ao mercado', status: true },
    { id: '2', name: 'Hoje irei pra faculdade', status: false },
    { id: '3', name: 'Amanhã irei para a aula de pedro', status: true },
    { id: '4', name: 'Amanhã irei para a aula de pedro', status: true },
    { id: '5', name: 'Amanhã irei para a aula de pedro', status: true },
    { id: '6', name: 'Amanhã irei para a aula de pedro', status: true },
    { id: '7', name: 'Amanhã irei para a aula de pedro', status: true },
    { id: '8', name: 'Amanhã irei para a aula de pedro', status: true },
  ];

  return (
    <View style={{ backgroundColor: '#2f3437' }}>
      <Header />
      <Animatable.View
        style={{
          top: 80,
          width: 400,
          height: 450,
          right: 8,
          alignSelf: 'center',
        }}
        animation="bounceInUp"
        useNativeDriver
        duration={1800}
      >
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <TodoItem item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </Animatable.View>
      <View
        style={{
          width: '100%',
          height: 200,
          backgroundColor: '#2f3437',
          top: 88,

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            position: 'relative',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Form');
            }}
            style={{
              position: 'absolute',
              width: 100,
              height: 100,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',

              bottom: 20,
            }}
          >
            <MaterialIcons name="add" size={80} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  list: state.todo.todo,
});

export default connect(mapStateToProps)(List);
