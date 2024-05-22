import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    name: string,
    score: number
}

const styles = StyleSheet.create({
    Score: {
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ViewWithName: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#003F91',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        fontWeight: '600',
        fontSize: 30,
        color: '#FFF',
    },
    TextScore: {
        fontWeight: '600',
        fontSize: 60,
        color: '#FFF',
    }
})

function Score({ name, score }: Props): React.JSX.Element {
    return (
        <View style={styles.Score}>
            <View style={styles.ViewWithName}>
                <Text style={styles.Text}>{name}</Text>
            </View>
            <Text style={styles.TextScore}>{score}</Text>
        </View>
    )
}

export default Score;