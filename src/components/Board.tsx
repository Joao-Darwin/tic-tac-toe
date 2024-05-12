import { Dimensions, StyleSheet, View } from "react-native";
import params from "../utils/paramsGame";

interface Props {
    children: React.JSX.Element | React.JSX.Element[]
}

const style = StyleSheet.create({
    Board: {
        width: Dimensions.get('window').width,
        height: params.getHeigthBoard(),
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

function Board({ children }: Props): React.JSX.Element {
    return (
        <View style={style.Board}>
            {children}
        </View>
    )
}

export default Board;