import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// import { Container } from './styles';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ButtonComponent from '../../components/Button';
import { deleteTodo } from '../../store/todo/actions';

function InfoItem({ route, navigation, deleteTodo }) {
  const { params } = route;
  const { item } = params;
  const { todo } = item;
  const { goBack } = navigation;
  const dateFormated = moment(todo.date).format('DD/MM');

  return (
    <View style={{ backgroundColor: '#2f3437', flex: 1 }}>
      <View style={{ width: 70, height: 30, top: 20, left: 8 }}>
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}
        >
          <MaterialIcons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
      </View>
      <Animatable.View
        duration={1500}
        useNativeDriver
        animation="bounceInLeft"
        style={{
          marginTop: 90,
          width: 250,
          height: 150,
          backgroundColor: '#3b4145',
          borderRadius: 6,
          alignSelf: 'center',
          elevation: 3,
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            left: 7,
            marginTop: 15,
            color: '#ebebeb',
          }}
        >
          Detalhes
        </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Text
            numberOfLines={2}
            style={{ left: 15, width: 200, color: '#ebebeb' }}
          >
            --- {todo.name}
          </Text>
          <Text style={{ color: '#ebebeb' }}>Data: {dateFormated}</Text>
          <Text style={{ width: 100, top: 3, color: '#ebebeb' }}>
            {' '}
            --- {todo.description}
          </Text>
        </View>
      </Animatable.View>
      <Animatable.View
        duration={2000}
        delay={200}
        useNativeDriver
        animation="bounceInLeft"
        style={{
          marginTop: 30,
          width: 250,
          height: 50,
          backgroundColor: '#3b4145',
          borderRadius: 6,
          alignSelf: 'center',
          elevation: 3,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 15,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#ebebeb' }}>
            Status:
          </Text>
          <MaterialIcons
            name="check"
            size={28}
            color={todo.status ? '#98FB98' : '#eee'}
          />
        </View>
      </Animatable.View>
      <Animatable.View
        duration={2200}
        delay={500}
        useNativeDriver
        animation="bounceInLeft"
        style={{ flexDirection: 'row', backgroundColor: '#2f3437' }}
      >
        <ButtonComponent
          left={5}
          rigth={0}
          backgroundColor="#BAC5D1"
          width={115}
          height={50}
          iconSize={25}
          borderRadius={4}
          label="Atualizar tarefa"
          labelColor="#fff"
          iconName="create"
          iconColor="#fff"
        />
        <ButtonComponent
          left={5}
          rigth={2}
          backgroundColor="#00ff80"
          iconSize={25}
          width={115}
          height={50}
          borderRadius={4}
          label="      Nova tarefa"
          onPress={() => navigation.navigate('Form')}
          iconColor="#fff"
          iconName="add"
          labelColor="#fff"
        />

        <ButtonComponent
          left={5}
          rigth={0}
          backgroundColor="#ff5b52"
          iconSize={25}
          width={115}
          height={50}
          borderRadius={4}
          label="Remover tarefa"
          labelColor="#fff"
          onPress={() => {
            deleteTodo(todo);
            navigation.goBack();
          }}
          iconName="delete"
          iconColor="#fff"
        />
      </Animatable.View>
      <Animatable.View
        style={{
          alignItems: 'center',
          bottom: 20,
          width: 150,

          alignSelf: 'center',
        }}
        duration={2400}
        delay={500}
        useNativeDriver
        animation="bounceInLeft"
      >
        <ButtonComponent
          iconName="keyboard-arrow-left"
          iconSize={59}
          width={80}
          height={80}
          borderRadius={80}
          iconColor="#fff"
          labelColor="#fff"
          center
          onPress={() => goBack()}
        />
      </Animatable.View>
    </View>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ deleteTodo }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(InfoItem);
