import React, { useState, useMemo } from 'react';
import {
  View,
  DatePickerAndroid,
  KeyboardAvoidingView,
  AsyncStorage,
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import * as Animetable from 'react-native-animatable';
import { bindActionCreators } from 'redux';
import { addTodo } from '../../store/todo/actions';
import InputContainer from '../../components/Form';
import Button from '../../components/Button';

function Add({ addTodo, navigation }) {
  const [onChange, setOnChange] = useState(new Date());
  const [isFavority, setIsFavority] = useState(false);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const dateFomarted = moment(onChange).format('DD/MM/YYYY');
  const date = new Date();
  async function handleOpenPicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });

    // Se o usuario selecionou alguma data
    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);

      const dateIsBefore = moment(selectedDate).isBefore(new Date());

      if (dateIsBefore) {
        setOnChange(new Date());
      } else {
        setOnChange(selectedDate);
      }
    }
  }
  async function newTodo() {
    const todo = {
      id: String(Math.random()),
      name,
      description,
      date: onChange,
      isFavority,
      status: false,
    };

    addTodo(todo);
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#2f3437' }}
      behavior="height"
    >
      <Animetable.View
        animation="bounceInUp"
        useNativeDriver
        duration={2200}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          top: 55,
        }}
      >
        <InputContainer
          placeholder="Digite aqui o Titulo"
          nameIcon="note-add"
          sizeIcon={25}
          colorIcon="#fff"
          bottom
          onChange={(values) => setName(values)}
        />
        <View style={{ width: 350 }}>
          <InputContainer
            placeholder="Digite aqui a descrição"
            nameIcon="description"
            sizeIcon={25}
            colorIcon="#fff"
            onChange={(values) => setDescription(values)}
          />
          <View style={{ marginTop: 25 }}>
            <InputContainer
              placeholder="Data Selecionada"
              nameIcon="date-range"
              sizeIcon={25}
              colorIcon="#fff"
              editable={false}
              value={String(dateFomarted)}
            />
          </View>
          <View
            style={{
              bottom: 50,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              left: 25,
            }}
          >
            <Button
              backgroundColor="#2f3437"
              width={50}
              height={50}
              iconName="date-range"
              onPress={() => handleOpenPicker()}
              center
              iconColor="#fff"
              iconSize={32}
              borderRadius={50}
            />
            <Button
              backgroundColor="#2f3437"
              width={50}
              height={50}
              iconName={isFavority ? 'favorite' : 'favorite-border'}
              center
              iconColor="#fff"
              iconSize={32}
              borderRadius={50}
              onPress={() =>
                isFavority ? setIsFavority(false) : setIsFavority(true)
              }
            />
            <Button
              backgroundColor="#2f3437"
              width={50}
              height={50}
              iconName="clear"
              center
              iconColor="#fff"
              iconSize={32}
              borderRadius={50}
            />
          </View>
        </View>

        <View>
          <Button
            backgroundColor="#2f3437"
            width={100}
            height={100}
            iconName="note-add"
            center
            iconColor="#fff"
            iconSize={42}
            borderRadius={100}
            onPress={() => newTodo()}
          />
        </View>
      </Animetable.View>
    </KeyboardAvoidingView>
  );
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addTodo }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Add);
