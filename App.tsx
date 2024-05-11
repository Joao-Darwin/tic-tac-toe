import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import Board from './src/components/Board';

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#020202',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={style.App}>
      <Board />
    </SafeAreaView>
  );
}

export default App;
