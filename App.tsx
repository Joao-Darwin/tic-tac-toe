import React, { useState } from 'react';
import {
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
  }

  return (
    <SafeAreaView style={style.App}>
      <Text style={style.Text}>Vez de {timeToPlay}</Text>
      <Board>
        <Field row={0} column={0} onPress={onPressField} moveToShow={timeToPlay} borderRight borderBottom />
        <Field row={0} column={1} onPress={onPressField} moveToShow={timeToPlay} borderBottom />
        <Field row={0} column={2} onPress={onPressField} moveToShow={timeToPlay} borderBottom borderLeft />
        <Field row={1} column={0} onPress={onPressField} moveToShow={timeToPlay} borderRight borderBottom />
        <Field row={1} column={1} onPress={onPressField} moveToShow={timeToPlay} borderBottom />
        <Field row={1} column={2} onPress={onPressField} moveToShow={timeToPlay} borderLeft borderBottom />
        <Field row={2} column={0} onPress={onPressField} moveToShow={timeToPlay} borderRight />
        <Field row={2} column={1} onPress={onPressField} moveToShow={timeToPlay} />
        <Field row={2} column={2} onPress={onPressField} moveToShow={timeToPlay} borderLeft />
      </Board>
    </SafeAreaView>
  );
}

export default App;
