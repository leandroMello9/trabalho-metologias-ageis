import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './src/pages/List';
// import { Container } from './styles';
import InfoItem from './src/pages/InfoItem';
import Add from './src/pages/Add';

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="InfoItem" component={InfoItem} />
        <Stack.Screen name="Form" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
