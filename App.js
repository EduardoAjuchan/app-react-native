import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Notas from "./screens/Notas";
import CreateNote from "./screens/CreateNote";
import DetailsNote from "./screens/DetailsNote";

export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Notas"
          component={Notas}
          options={{
            title: "NOTAS App",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#0496FF" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Crear"
          component={CreateNote}
          options={{
            title: "CREAR NOTA",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#0496FF" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailsNote}
          options={{
            title: "DETALLE DE NOTA",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#0496FF" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
