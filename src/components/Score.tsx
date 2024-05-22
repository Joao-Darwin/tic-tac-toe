import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    name: string,
    score: number
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 10,
    },
    scoreBox: {
        alignItems: 'center',
    },
    playerText: {
        fontSize: 18,
        fontWeight: '500',
    },
    scoreText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#2d3436',
    },
})

function Score({ name, score }: Props): React.JSX.Element {
    return (
        <View style={styles.card}>
            <View style={styles.scoreBox}>
                <Text style={styles.playerText}>{name}</Text>
                <Text style={styles.scoreText}>{score}</Text>
            </View>
        </View>
    )
}

export default Score;