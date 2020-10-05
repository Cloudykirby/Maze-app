import React, { Component } from "react";
import { StyleSheet, Button, View, Text } from "react-native";

import { Col, Row, Grid } from "react-native-easy-grid";

let xValue;
let yValue;
let placementMaze = [];

export default class Maze extends Component {
  constructor(props) {
    super(props);
    const { value } = this.props.route.params;
    xValue = Number(value.xValue);
    yValue = Number(value.yValue);

    let newMaze = this.setUpMaze();
    this.state = {
      maze: newMaze,
      completed: false,
    };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(x, y) {
    let oldState = this.state.maze;
    let currentPlace = oldState[y][x];
    if (currentPlace === 0) {
      oldState[y][x] = 1;
      placementMaze = JSON.parse(JSON.stringify(oldState));
      let result = this.mazeSearch(0, 0);
      this.setState({ maze: oldState });

      console.log(result);
    } else {
      oldState[y][x] = 0;
      placementMaze = JSON.parse(JSON.stringify(oldState));
      let result = this.mazeSearch(0, 0);
      this.setState({ maze: oldState });
      console.log(result);
    }
  }

  setUpMaze = () => {
    console.log("setup maze is running");
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

  mazeSearch(x, y) {
    console.log(x, y, xValue - 1, yValue - 1);
    const targetX = xValue - 1;
    const targetY = yValue - 1;
    if (x === targetX && y === targetY) {
      return true;
    } else if (placementMaze[y][x] === 0) {
      placementMaze[y][x] = 9;
      if (x !== 0) {
        // checks to see if the current x value is next to the left side
        console.log("Moving right", placementMaze);
        this.mazeSearch(x - 1, y);
      }
      if (x < placementMaze[0].length) {
        // check to see if the current x value is on the right wall if not add one
        console.log("Moving left", placementMaze);
        this.mazeSearch(x + 1, y);
      }
      if (y !== 0) {
        //checks to see if the value is on the top if not minus one from the y
        console.log("Moving down", placementMaze);
        this.mazeSearch(x, y - 1);
      }
      if (y < placementMaze.length) {
        //checkst to see if the y value is on the bottom
        console.log("Moving up", placementMaze);
        this.mazeSearch(x, y + 1);
      }
    }
    return false;
  }

  render() {
    return (
      <Grid>
        <View style={style.container}>
          <Text>Dimensions</Text>
          <Text>
            {xValue}x {yValue}
          </Text>
          <Button title="Submit" disabled={true} />
        </View>
        {this.state.maze.map((row, Colkey) => {
          return (
            <Col key={Colkey}>
              {row.map((cell, key) => {
                let y = key;
                let x = Colkey;
                return (
                  <Row
                    style={{
                      // If cell is 1(alive) render a color there
                      backgroundColor:
                        this.state.maze[y][x] == 1 ? "#00FFFF" : "#FFB266",
                      margin: 1,
                    }}
                    key={key}
                    onPress={() => {
                      this.handlePress(x, y);
                    }}
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
    borderColor: "black",
  },
});
