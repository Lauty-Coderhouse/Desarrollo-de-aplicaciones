import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  NavigationRoute,
} from "react-navigation";
import { useFonts } from "expo-font";
import IndexScreen from "./src/screens/IndexScreen";
import InfoScreen from "./src/screens/InfoScreen";
import { fonts } from "./src/global/fonts";

const AppNavigator = createSwitchNavigator(
  {
    Screen1: { screen: IndexScreen },
    Screen2: { screen: InfoScreen },
  },
  {
    initialRouteName: "Screen1",
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App: React.FC = () => {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return null;

  return <AppContainer />;
};

export default App;
