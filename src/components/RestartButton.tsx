import React from "react";
import { Button, Dimensions, GestureResponderEvent, StyleSheet, View } from "react-native";

interface Props {
    title: string,
    color: string,
    onPress: ((event: GestureResponderEvent) => void) | undefined
}

const styles = StyleSheet.create({
    RestartButton: {
        position: 'absolute',
        bottom: Dimensions.get('screen').height / 2
    }
})

function RestartButton({ title, color, onPress }: Props): React.JSX.Element {
    return (
        <View style={styles.RestartButton}>
            <Button title={title} color={color} onPress={onPress} />
        </View>
    )
}

export default RestartButton;