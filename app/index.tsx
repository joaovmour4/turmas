import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import CreateTurma from "./screens/CreateTurma";
import Turma from "./screens/Turma";

const Stack = createNativeStackNavigator()

export default function Index() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Nova Turma" component={CreateTurma} />
      <Stack.Screen name="Turma" component={Turma} />
    </Stack.Navigator>
  );
}
