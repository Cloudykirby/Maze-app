import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Components/HomeScreen";
import Navigator from "./Components/StackNav";

export default class App extends Component {
  Navigator;
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <HomeScreen />
      </View>
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
