import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Turma from "./screens/Turma";
import CreateTurma from "./screens/CreateTurma";
import { Image } from "react-native";
import { SessionProvider } from "./contexts/SessionContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator()

export default function Index() {
  return (
    <GestureHandlerRootView>
      <SessionProvider>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#202024' },
            headerShadowVisible: false,
            headerTintColor: '#fff',
            headerTitle: () => (
              <Image 
                source={require('../assets/images/logo.png')}
                style={{ width: 46, height: 55, alignSelf: 'flex-end' }}
              />
            )
          }}
        >
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Turma" component={Turma} />
            <Stack.Screen name="Nova Turma" component={CreateTurma} />
        </Stack.Navigator>
      </SessionProvider>
    </GestureHandlerRootView>
  );
}
