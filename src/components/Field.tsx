import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import params from "../utils/paramsGame";
import { useState } from "react";

interface Props {
    moveToShow: string,
    borderTop?: boolean,
    borderRight?: boolean,
    borderBottom?: boolean,
    borderLeft?: boolean,
    row: number,
    column: number,
    onPress: ((row: number, column: number) => void)
}

const style = StyleSheet.create({
    Field: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        width: params.getWidthField(),
        height: params.getHeigthField(),
    },
    FieldWithBorderTop: {
        borderTopWidth: params.borderWidth,
    },
    FieldWithBorderRight: {
        borderRightWidth: params.borderWidth,
    },
    FieldWithBorderBottom: {
        borderBottomWidth: params.borderWidth,
    },
    FieldWithBorderLeft: {
        borderLeftWidth: params.borderWidth,
    },
    Text: {
        fontSize: 100,
        color: '#FFF'
    }
})

function Field({ moveToShow, borderTop, borderRight, borderBottom, borderLeft, row, column, onPress }: Props): React.JSX.Element {

    const [showMove, setShowMove] = useState(false);
    const [moveToShowIntern, setMoveToShowIntern] = useState('');

    const styleField: { [key: string]: any } = [style.Field];

    if (borderTop) styleField.push(style.FieldWithBorderTop);
    if (borderRight) styleField.push(style.FieldWithBorderRight);
    if (borderBottom) styleField.push(style.FieldWithBorderBottom);
    if (borderLeft) styleField.push(style.FieldWithBorderLeft);

    const onPressField = () => {
        if (moveToShowIntern === '') {
            setMoveToShowIntern(moveToShow);
            setShowMove(true);
            onPress(row, column);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={onPressField}>
            <View style={styleField}>
                {showMove && <Text style={style.Text}>{moveToShowIntern}</Text>}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Field;