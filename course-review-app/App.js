import { StatusBar } from "expo-status-bar";
import { Ionicons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import * as React from "react";
import {
  DrawerLayoutAndroid,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";
import "react-native-gesture-handler";
import {
  DefaultTheme,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackground,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";
import CoursesList from "./components/CoursesList";
import About from "./components/About";
import CourseDetails from "./components/CourseDetails";
import AddReview from "./components/AddReview";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Root = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: false,
    }}
  >
    <Stack.Screen
      options={{ headerShown: false }}
      name="CourseList"
      component={CoursesList}
    />

    <Stack.Screen name="CourseDetails" component={CourseDetails} />
    <Stack.Screen name="AddReview" component={AddReview} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{activeBackgroundColor:'#0066cc', activeTintColor:'white', color:'white'}}>
        <Tab.Screen
          name="Courses"
          component={Root}
          options={{
            tabBarIcon: () => <AntDesign name="home" size={25}  />,
            tabBarLabel: "Courses",
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: () => <AntDesign name="user" size={25}  />,
            tabBarLabel: "About Us",

          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
