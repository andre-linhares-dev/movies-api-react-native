import { api } from "../../../assets/api/req";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList, TouchableOpacity, View, Image, Button } from "react-native";
import { styles } from "./HomeStyle";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from 'react-redux';
import { idDetail } from "../../../redux/slice";
import AsyncStorage from '@react-native-async-storage/async-storage';




export function Home({ navigation }) {
    const [movies, setMovies] = useState()
    const dispatch = useDispatch();

    useEffect(() => {
        api.get('https://api.themoviedb.org/3/movie/popular?api_key=e0eee4824088822e60cc7e2e89ba455b&language=pt-BR&page=1')
            .then((resposta) => {
                setMovies(resposta.data.results)
                console.log(resposta.data.results)
            }).catch((erro) => {
                console.log(erro)
            })
    }, [])

    const GoToDetail = async (id) => {
        await dispatch(idDetail(id))
        navigation.navigate("Detail")
    }

    const logOut = async () => {
        await AsyncStorage.removeItem('isAuth')
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={styles.container}>
            {!movies ? null :
                <FlatList data={movies} keyExtractor={item => item.id} renderItem={({ item }) => (
                    <TouchableOpacity style={styles.grid} key={item.id} onPress={() => GoToDetail(item.id)}>
                        <View style={styles.subContainer}>
                            <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} alt="poster" />
                            <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )} />

            }
            <TouchableOpacity>
                <Text style={styles.logout} onPress={() => logOut()}>
                    Sair da conta
                </Text>
            </TouchableOpacity>
            <StatusBar style='auto' />
        </SafeAreaView>
    );
}


