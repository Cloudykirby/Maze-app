import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>MAZE</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CreateMazeInfo")}
        >
          <Text>Create Maze</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PlayMazeGame")}
        >
          <Text>Play Maze</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Credits")}
        >
          <Text>Credits</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#00FFFF",
    padding: 10,
    marginBottom: 10,
    borderColor: "black",
    borderRadius: 25,
    width: 200,
  },
  title: {
    fontSize: 100,
    fontWeight: "bold",
  },
});
