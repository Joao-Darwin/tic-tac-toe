import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    name: string,
    score: number
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10,
    },
    shadow: {
        position: 'absolute',
        top: 7,
        left: -7,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        zIndex: -1,
    },
    card: {
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    scoreBox: {
        alignItems: 'center',
    },
    playerText: {
        fontSize: 20,
        fontWeight: '500',
    },
    scoreText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#2d3436',
    },
});

function Score({ name, score }: Props): React.JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.shadow} />
            <View style={styles.card}>
                <View style={styles.scoreBox}>
                    <Text style={styles.playerText}>{name}</Text>
                    <Text style={styles.scoreText}>{score}</Text>
                </View>
            </View>
        </View>
    )
}

export default Score;
