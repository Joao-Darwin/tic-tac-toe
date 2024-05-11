import { Dimensions, StyleSheet, View } from "react-native";
import params from "../utils/paramsGame";

const style = StyleSheet.create({
    Board: {
        width: Dimensions.get('window').width,
        height: params.getHeigthBoard(),
        backgroundColor: 'red'
    }
})

function Board(): React.JSX.Element {
    return (
        <View style={style.Board}>

        </View>
    )
}

export default Board;