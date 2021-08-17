import React, { useState } from "react";
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  Button,
  Alert,
} from "react-native";

import Course from "components/Course";
import Header from "components/Header";
import {
  createStackNavigator,
  HeaderBackground,
} from "@react-navigation/stack";
import CourseDetails from "./CourseDetails";
import AddReview from "./AddReview";

// const Stack = createStackNavigator();

const data = [
  {
    title: "Web Application Programming",
    faculty: "Asaad Saad",
    code: "CS472",
    rating: 4,
  },
  {
    title: "Modern Web Application",
    faculty: "Asaad Saad",
    code: "CS572",
    rating: 5,
  },
  {
    title: "Enterprise Architecture",
    faculty: "Joe Bruen",
    code: "CS557",
    rating: 4,
  },
  { title: "Algorithms", faculty: "Clyde Ruby", code: "CS421", rating: 5 },
  {
    title: "Object Oriented JavaScript",
    faculty: "Keith Levi",
    code: "CS372",
    rating: 3,
  },
  { title: "Big Data", faculty: "Prem Nair", code: "CS371", rating: 5 },
  {
    title: "Web Application Architecture",
    faculty: "Rakesh Shrestha",
    code: "CS377",
    rating: 5,
  },
  {
    title: "Big Data Analytics",
    faculty: "Mrudula Mukadam",
    code: "CS378",
    rating: 5,
  },
];

export default function CoursesList() {
  const [newData, setNewData] = useState(data);
  const liveSearch = (text) => {
    const filterList = data.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) >= 0;
    });
    // console.log("break")
    console.log(filterList);

    setNewData(filterList);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: Platform.OS === "android" ? 30 : 0,
        paddingBottom: 200,
      }}
    >
      <View>
        <Header />
        <TextInput
          style={{ backgroundColor: "#F3F3F7", height: 36 }}
          placeholder="Live Search"
          onChangeText={(text) => liveSearch(text)}
        />
      </View>
      <FlatList
        data={newData}
        renderItem={({ item }) => (
          <Course data={{ ...item, index: newData.indexOf(item) }} />
        )}
        keyExtractor={(item) => item.code.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5",
  },
});
