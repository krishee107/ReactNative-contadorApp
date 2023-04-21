import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `red`
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        borderWidth: 10
    }
});