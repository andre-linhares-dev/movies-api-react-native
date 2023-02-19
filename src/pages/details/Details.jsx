import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { data, getMovieDetails, id, returnHome } from "../../../redux/slice";
import { styles } from "../details/DetailsStyle";

export function Details({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  var details = useSelector(data);
  var ids = useSelector(id);

  const start = async () => {
    await dispatch(getMovieDetails(ids));
    setIsLoading(false);
  };

  useEffect(() => {
    start();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Image
          style={{ width: "50%", height: "20%" }}
          source={{
            uri: "https://portal.safetynetwireless.com/dist/images/loader.gif",
          }}
        />
      ) : (
        <>
        <ImageBackground
          style={styles.header}
          imageStyle={{opacity: 0.15}}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${details.poster_path}`,
          }}
        >          
   
        <Text style={styles.title}>{details.title}</Text>
        <Text style={styles.midTitle}>Sinopse</Text>
        <Text style={styles.midText}>{details.overview}</Text>
        <Text style={styles.midTitle}>Nota</Text>
        <Text style={styles.midText}>{details.vote_average}</Text>
        <Text style={styles.midTitle}>Data de lançamento</Text>
        <Text style={styles.midText}>{details.release_date}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
            dispatch(returnHome());
            setIsLoading(true);
          }}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
    
        </ImageBackground>

      </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

