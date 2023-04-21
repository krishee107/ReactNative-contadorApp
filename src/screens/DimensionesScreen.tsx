import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from "react-native"

//const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {
    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.cajaMorada}></View>
                <View style={styles.cajaNaranja}></View>
            </View>
            <Text style={styles.title}>W: {width} H: {height}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 500,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: `#5856D6`,
        width: "50%",
        height: "50%"
    },
    cajaNaranja: {
        backgroundColor: '#F0a23b',
        width: "50%",
        height: "50%"
    },
    title: {
        fontSize: 30
    }
});