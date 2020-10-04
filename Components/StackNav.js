import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import { Navigation } from "react-native-navigation";

const screens = {
  Home: {
    screen: HomeScreen,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
