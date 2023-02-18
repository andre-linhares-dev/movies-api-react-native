import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: '#111',
     alignItems: 'center',
     justifyContent: 'center',
     paddingVertical: '5%'
    },
    grid: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        height: 180,
        // backgroundColor: '#E50914',
        margin: 10
    },
    subContainer: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 0.7,
        borderRadius: 10,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        height: 180,
        width: '100%',
        backgroundColor: '#111',
        paddingHorizontal: '5%'
    },
    image: {
        width: 90,
        height: 140,
        marginRight: '5%'

    },
    title: {
        color: '#fff',
        fontSize: 18,
        width: '70%'
    },
    logout: {
        color: '#fff',
        paddingTop: 10
    }

  });