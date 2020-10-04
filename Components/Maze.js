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
import { TouchableOpacity } from "react-native-gesture-handler";
import { Col, Row, Grid } from "react-native-easy-grid";
import { render } from "react-dom";
let xValue;
let yValue;

export default class Maze extends Component {
  constructor(props) {
    super(props);
    const { value } = this.props.route.params;
    xValue = Number(value.xValue);
    yValue = Number(value.yValue);
    let newMaze = this.setUpMaze();
    this.state = {
      maze: newMaze,
    };
  }

  setUpMaze = () => {
    let maze = new Array(yValue);
    for (let i = 0; i < yValue; ++i) {
      maze[i] = new Array(xValue);
    }
    for (let y = 0; y < yValue; ++y) {
      for (let x = 0; x < xValue; ++x) {
        maze[y][x] = 1;
      }
    }
    return maze;
  };
  render() {
    return (
      // <View>
      //   <Text>
      //     {xValue}x {yValue}
      //   </Text>
      //   <Text>{typeof xValue}</Text>
      // </View>
      <Grid>
        <View style={style.container}>
          <Text>Dimensions</Text>
          <Text>
            {xValue}x {yValue}
          </Text>
          <Button title="Submit" disabled={true} />
        </View>
        {this.state.maze.map((row, key) => {
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
}

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    padding: 1,
    alignItems: "center",
    width: 80,
    justifyContent: "center",
  },
  grid: {
    backgroundColor: "pink",
    borderColor: "black",
  },
});
