import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./Screens/Home";
import Market from "./Screens/Market";
import Confirmation from "./Screens/Confirmation";
import ProductInfo from "./Screens/ProductInfo";
import MyCart from "./Screens/MyCart";
import LogisticsHome from "./Screens/LogisticsHome";

import { COLORS } from "./Constants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Market" component={Market} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="LogisticsHome" component={LogisticsHome} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
