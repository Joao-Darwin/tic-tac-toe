import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import params from "../utils/paramsGame";
import { useState } from "react";

interface Props {
    boardValueField: string,
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
        borderColor: 'black',
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
        fontWeight: "700"
    },
    TextWhenX: {
        color: '#000'
    },
    TextWhenO: {
        color: '#0009'
    }
})

function Field({ boardValueField, borderTop, borderRight, borderBottom, borderLeft, row, column, onPress }: Props): React.JSX.Element {

    const styleField: { [key: string]: any } = [style.Field];

    if (borderTop) styleField.push(style.FieldWithBorderTop);
    if (borderRight) styleField.push(style.FieldWithBorderRight);
    if (borderBottom) styleField.push(style.FieldWithBorderBottom);
    if (borderLeft) styleField.push(style.FieldWithBorderLeft);

    const styleText: { [key: string]: any } = [style.Text];

    styleText.push(boardValueField === 'X' ? style.TextWhenX : style.TextWhenO);

    const onPressField = () => {
        if (boardValueField === '') {
            onPress(row, column);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={onPressField}>
            <View style={styleField}>
                {boardValueField !== '' && <Text style={styleText}>{boardValueField}</Text>}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Field;