import { StyleSheet, Text, TouchableNativeFeedback, Platform, View, TouchableOpacity } from "react-native"

interface Props {
    title: string,
    position?: "br" | "bl",
    onPress: () => void,
}

export const Fab = ({ title, onPress, position = "br" }: Props) => {
    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                style={
                    position === "bl" ?
                        styles.fabLocationBL
                        : styles.fabLocationBR
                }
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const android = () => {
        return (
            <View
                style={
                    position === "bl" ?
                        styles.fabLocationBL
                        : styles.fabLocationBR
                }
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple("#28425B", false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return Platform.OS === 'ios' ? ios() : android();
}

const styles = StyleSheet.create({
    fabLocationBL: {
        position: "absolute",
        bottom: 10,
        left: 10
    },
    fabLocationBR: {
        position: "absolute",
        bottom: 10,
        right: 10
    },
    fab: {
        backgroundColor: `#5856D6`,
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    fabText: {
        color: `white`,
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center"
    }
})