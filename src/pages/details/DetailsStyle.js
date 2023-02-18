import {
    StyleSheet
} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    header: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#000",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        // alignItems: "center"
    },
    mid: {
        flex: 3,
        backgroundColor: "#000",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingHorizontal: 25,
    },
    midTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
       
    },
    midText: {
        fontSize: 16,
        color: "#fff",
        paddingHorizontal: 25
    },
    title: {
        color: "#fff",
        fontSize: 35,
        paddingHorizontal: 15
    },
    button: {
        height: "8%",
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E50914",
        borderTopLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});