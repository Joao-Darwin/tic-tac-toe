import React, { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Board from './src/components/Board';
import Field from './src/components/Field';
import gameLogic from './src/utils/gameLogic';
import Score from './src/components/Score';

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 80
  },
  ScoreBoard: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  Text: {
    fontWeight: '600',
    fontSize: 30,
    color: '#000',
    bottom: 10
  }
})

function App(): React.JSX.Element {

  const [scorePlayer01, setScorePlayer01] = useState(0);
  const [scorePlayer02, setScorePlayer02] = useState(0);
  const [observationBoardMode, setObservationBoardMode] = useState(false);
  const [timeToPlay, setTimeToPlay] = useState('X');
  const [board, setBoard] = useState<string[][]>(gameLogic.createVoidBoard())

  const onPressField = (row: number, column: number) => {
    if (observationBoardMode) return;

    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === column) {
          return timeToPlay;
        }
        return cell;
      })
    );

    setBoard(newBoard);
    setTimeToPlay(prev => prev === 'X' ? 'O' : 'X');
  };

  useEffect(() => {
    if (gameLogic.checksIfWon(board)) {
      Alert.alert(
        `Jogador ${timeToPlay === 'X' ? '02' : '01'} ganhou!`,
        undefined,
        buttonsOnAlert
      );

      timeToPlay === 'X' ? setScorePlayer02(prev => prev + 1) : setScorePlayer01(prev => prev + 1);
    } else if (gameLogic.checksIfDrawn(board)) {
      Alert.alert("Empate", undefined, buttonsOnAlert);
      setScorePlayer01(prev => prev + 0.5)
      setScorePlayer02(prev => prev + 0.5)
    }
  }, [board]);

  const buttonsOnAlert = [
    {
      text: 'Recomeçar',
      onPress: () => restartBoard(),
    },
    {
      text: 'Ver',
      onPress: () => setObservationBoardMode(true)
    },
  ];

  const restartBoard = () => {
    setBoard(gameLogic.createVoidBoard());
  }

  return (
    <SafeAreaView style={style.App}>
      <View style={style.ScoreBoard}>
        <Score name='Player 01' score={scorePlayer01} />
        <Score name='Player 02' score={scorePlayer02} />
      </View>
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
