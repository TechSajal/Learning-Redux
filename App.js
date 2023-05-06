import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen';
import {Provider} from 'react-redux';
import { Store } from './Redux/Store';
// import {mystore} from './Redux/Store';
import Main from './Main';
const App = () => {
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
};

export default App;
