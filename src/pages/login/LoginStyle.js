import {
    StyleSheet
} from "react-native"

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        alignSelf: 'center',
        fontSize: 22,
        marginBottom: 15
    },
    input: {
        borderColor: '#d0d0d0',
        borderWidth: 1,
        borderRadius: 20,
        height: 50,
        width: '80%',
        paddingHorizontal: 10,
        marginVertical: 10
    },
    button: {
        height: "6%",
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E50914",
        borderTopLeftRadius: 6,
        borderBottomRightRadius: 6,
        marginVertical: 10
    },
    buttonText: {
        color: '#fff'
    },
    
    register: {
        color: 'blue',
        marginVertical: 10
    }

})