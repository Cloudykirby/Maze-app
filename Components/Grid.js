import React, { Component } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Dimensions,
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
export default function GridComponent({ maze }) {
  return (
    // <View>
    //   <Text>
    //     {xValue}x {yValue}
    //   </Text>
    //   <Text>{typeof xValue}</Text>
    // </View>

    <Grid>
      {maze.map((row, key) => {
        return (
          <Col key={key}>
            {row.map((cell, key) => {
              return (
                <Row
                  style={{
                    // If cell is 1(alive) render a color there
                    backgroundColor: cell.cell == 1 ? "#FFB266" : "#00FFFF",
                    margin: 1,
                  }}
                  key={key}
                ></Row>
              );
            })}
          </Col>
        );
      })}
    </Grid>
  );
}
