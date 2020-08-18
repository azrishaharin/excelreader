import * as React from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from './components/Header';
import ExcelReader from '../ExcelReader/ExcelReader';

function HomeScreen() {
  const onClickUpload = (e) => {
    console.log(e.target.file);
  };

  return (
    <View style={{flex: 1}}>
      {/* <Button title={'upload file 1'} onPress={onClickUpload} />
      <Button title={'upload file 2'} onPress={onClickUpload} /> */}
      {/* <ExcelReader /> */}
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>azrishaharin94@gmail.com</Text>
      <Text>012-6994312</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
