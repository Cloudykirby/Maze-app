import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Components/HomeScreen";
import CreateMazeInfo from "./Components/PlayMazeInfo";
import PlayMazeGame from "./Components/PlayMazeGame";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Credits from "./Components/Credits";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CreateMazeInfo" component={CreateMazeInfo} />
          <Stack.Screen name="Credits" component={Credits} />
          <Stack.Screen name="PlayMazeGame" component={PlayMazeGame} />
        </Stack.Navigator>
      </NavigationContainer>
      // <View style={styles.container}>
      //   <StatusBar style="auto" />
      //   <HomeScreen />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 100,
    fontWeight: "bold",
  },
});
