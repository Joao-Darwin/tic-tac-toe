import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Board from './src/components/Board';
import Field from './src/components/Field';

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#020202',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

function App(): React.JSX.Element {

  const [timeToPlay, setTimeToPlay] = useState('X');

  return (
    <SafeAreaView style={style.App}>
      <Board>
        <Field moveToShow={timeToPlay} borderRigth borderBottom />
        <Field moveToShow={timeToPlay} borderBottom />
        <Field moveToShow={timeToPlay} borderBottom borderLeft />
        <Field moveToShow={timeToPlay} borderRigth borderBottom />
        <Field moveToShow={timeToPlay} borderBottom />
        <Field moveToShow={timeToPlay} borderLeft borderBottom />
        <Field moveToShow={timeToPlay} borderRigth />
        <Field moveToShow={timeToPlay} />
        <Field moveToShow={timeToPlay} borderLeft />
      </Board>
    </SafeAreaView>
  );
}

export default App;
