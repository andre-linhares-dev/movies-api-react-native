import { SafeAreaView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import { auth } from "../../../assets/auth/Auth";
import { style } from "./LoginStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword } from "firebase/auth";


export function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const authenticator = async () => {
        const response = await AsyncStorage.getItem('isAuth');
        console.log(response);
        if (response === 'true') {
            navigation.navigate('Home')
        }
    }

    useEffect(() => {
        authenticator()
    }, [])

    const login = async () => {
        await signInWithEmailAndPassword(auth, email, password)
            .then(async (response) => {
                Alert.alert('Login feito com sucesso!');
                await AsyncStorage.setItem('isAuth', 'true')
                navigation.navigate('Home')
                console.log(response)
            }).catch((err) => {
                switch(err.message) {
                    case 'Firebase: Error (auth/user-not-found).', 'Firebase: Error (auth/invalid-email).':
                        Alert.alert('O usuário e/ou senha estão incorretos');
                        break;
                    case 'Firebase: Error (auth/wrong-password).':
                        Alert.alert('O usuário e/ou senha estão incorretos');
                        break;
                    case 'Firebase: Error (auth/internal-error).':
                        Alert.alert('Erro interno, preencha todos os campos');
                        break;
                    default:
                        Alert.alert(err.message.toString())
                }
            })
    }

    const goToRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.textTitle}>Login</Text>
            <TextInput
                style={style.input}
                value={email}
                onChangeText={(e) => setEmail(e)}
                placeholder='Email'
            />
            <TextInput
                style={style.input}
                value={password}
                onChangeText={(e) => setPassword(e)}
                placeholder='Senha'
                secureTextEntry
            />
            <TouchableOpacity style={style.button} onPress={()=> login()}>
                <Text style={style.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goToRegister()}>
                <Text style={style.register}>Ainda não é membro? Faça seu cadastro aqui!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}