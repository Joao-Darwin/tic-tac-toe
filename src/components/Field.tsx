import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import params from "../utils/paramsGame";
import { useState } from "react";

interface Props {
    moveToShow: string,
    borderTop?: boolean,
    borderRigth?: boolean,
    borderBottom?: boolean,
    borderLeft?: boolean,
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
        borderTopWidth: 7,
    },
    FieldWithBorderRigth: {
        borderRightWidth: 7,
    },
    FieldWithBorderBottom: {
        borderBottomWidth: 7,
    },
    FieldWithBorderLeft: {
        borderLeftWidth: 7,
    },
    Text: {
        fontSize: 100,
        color: '#FFF'
    }
})

function Field({ moveToShow, borderTop, borderRigth, borderBottom, borderLeft }: Props): React.JSX.Element {

    const [showMove, setShowMove] = useState(false);

    const styleField: { [key: string]: any } = [style.Field];

    if (borderTop) styleField.push(style.FieldWithBorderTop);
    if (borderRigth) styleField.push(style.FieldWithBorderRigth);
    if (borderBottom) styleField.push(style.FieldWithBorderBottom);
    if (borderLeft) styleField.push(style.FieldWithBorderLeft);

    return (
        <TouchableWithoutFeedback onPress={() => setShowMove(true)}>
            <View style={styleField}>
                {showMove && <Text style={style.Text}>{moveToShow}</Text>}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Field;