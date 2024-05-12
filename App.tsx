import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import Board from './src/components/Board';
import Field from './src/components/Field';

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#020202',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  Text: {
    fontWeight: '600',
    fontSize: 30,
    color: '#FFF',
    bottom: 10
  }
})

function App(): React.JSX.Element {

  const [timeToPlay, setTimeToPlay] = useState('X');

  return (
    <SafeAreaView style={style.App}>
      <Text style={style.Text}>Vez de {timeToPlay}</Text>
      <Board>
        <Field moveToShow={timeToPlay} borderRight borderBottom />
        <Field moveToShow={timeToPlay} borderBottom />
        <Field moveToShow={timeToPlay} borderBottom borderLeft />
        <Field moveToShow={timeToPlay} borderRight borderBottom />
        <Field moveToShow={timeToPlay} borderBottom />
        <Field moveToShow={timeToPlay} borderLeft borderBottom />
        <Field moveToShow={timeToPlay} borderRight />
        <Field moveToShow={timeToPlay} />
        <Field moveToShow={timeToPlay} borderLeft />
      </Board>
    </SafeAreaView>
  );
}

export default App;
