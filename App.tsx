import React, { useState } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import Board from './src/components/Board';
import Field from './src/components/Field';
import gameLogic from './src/utils/gameLogic';

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
  const [board, setBoard] = useState<string[][]>(gameLogic.createVoidBoard())

  const onPressField = (row: number, column: number) => {
    if (timeToPlay === 'X') {
      setTimeToPlay('O');
      board[row][column] = 'X'
      setBoard(board);
    } else {
      setTimeToPlay('X')
      board[row][column] = 'O'
      setBoard(board);
    }

    if(gameLogic.checksIfWon(board)) {
      if(timeToPlay === 'X') {
        Alert.alert("Jodagor 01 ganhou!");
        setTimeToPlay('X');
      } else {
        Alert.alert("Jogador 02 ganhou!");
        setTimeToPlay('O');
      }
    }
  }

  return (
    <SafeAreaView style={style.App}>
      <Text style={style.Text}>Vez de {timeToPlay}</Text>
      <Board>
        <Field board={board} row={0} column={0} onPress={onPressField} borderRight borderBottom />
        <Field board={board} row={0} column={1} onPress={onPressField} borderBottom />
        <Field board={board} row={0} column={2} onPress={onPressField} borderBottom borderLeft />
        <Field board={board} row={1} column={0} onPress={onPressField} borderRight borderBottom />
        <Field board={board} row={1} column={1} onPress={onPressField} borderBottom />
        <Field board={board} row={1} column={2} onPress={onPressField} borderLeft borderBottom />
        <Field board={board} row={2} column={0} onPress={onPressField} borderRight />
        <Field board={board} row={2} column={1} onPress={onPressField} />
        <Field board={board} row={2} column={2} onPress={onPressField} borderLeft />
      </Board>
    </SafeAreaView>
  );
}

export default App;
