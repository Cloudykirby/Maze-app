import React, { Component } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  TextInput,
} from "react-native";
import { Formik } from "formik";

export default function Info({ navigation }) {
  return (
    <View style={styles.input}>
      <Formik
        initialValues={{ xValue: "", yValue: "", theme: "" }}
        onSubmit={(value) => {
          navigation.navigate("Maze", { value: value });
        }}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder="x"
              onChangeText={props.handleChange("xValue")}
              value={props.values.xValue}
              keyboardType="numeric"
            />
            <Text>x</Text>
            <TextInput
              placeholder="y"
              onChangeText={props.handleChange("yValue")}
              value={props.values.yValue}
              keyboardType="numeric"
            />
            <Button title="Next" color="maroon" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
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
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});
