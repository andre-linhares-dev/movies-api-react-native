import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Home } from './src/pages/home/Home';
import { Details } from './src/pages/details/Details';
import { Login } from './src/pages/login/Login';
import { Register } from './src/pages/register/Register'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer style = {styles.container}>
      <Image source={require('./assets/img/headerFullflix.jpg')} style={styles.image} />
      <Stack.Navigator initialRouteName="Login">
 
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{
            title: 'TOP 20 FILMES DA SEMANA',
            headerTitleStyle: {
              color: '#fff'
            },
            headerBackVisible: false,
            headerStyle: { 
              backgroundColor: '#e50914',
            },
          }}
        />
        <Stack.Screen
            name="Detail"
            component={ Details }
            options={{
              title: "DETALHES",
              headerTitleStyle: {
                color: '#fff'
              },
              headerBackVisible: false,
              headerStyle: { backgroundColor: "#E50914" },
            }}
          />
          <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "LOGIN",
            // headerTransparent: true,
            headerShadowVisible: true,
            headerBackVisible: false,
            headerTitleStyle: {
              color: '#fff'
            },
            headerBackVisible: false,
            headerStyle: { backgroundColor: "#E50914" },
          }}
          />
          <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "NOVOS USUÁRIOS",
            // headerTransparent: true,
            headerShadowVisible: true,
            headerBackVisible: false,
            headerTitleStyle: {
              color: '#fff'
            },
            headerBackVisible: false,
            headerStyle: { backgroundColor: "#E50914" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  image: {
    width: '100%',
    height: 170,
  }

});
