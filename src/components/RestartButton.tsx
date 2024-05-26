import React from "react";
import { Button, Dimensions, GestureResponderEvent, StyleSheet, View } from "react-native";

interface Props {
    onPress: ((event: GestureResponderEvent) => void) | undefined
}

const styles = StyleSheet.create({
    RestartButton: {
        position: 'absolute',
        bottom: Dimensions.get('screen').height / 2
    }
})

function RestartButton({ onPress }: Props): React.JSX.Element {
    return (
        <View style={styles.RestartButton}>
            <Button title="Restart" color={'#000'} onPress={onPress} />
        </View>
    )
}

export default RestartButton;