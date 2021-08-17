import React from "react";
import Stars from "components/Stars";

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import AddReview from "./AddReview";
import { useNavigation } from "@react-navigation/core";

const CourseDetails = ({ route: { params } }) => {
  const navigation = useNavigation();
  const course = params;
  const addReview = () => {
    navigation.navigate("AddReview", {rating:course.rating, code: course.code});
  };
  return (
    <ScrollView style={styles.root}>
      <View style={styles.infoHeader}>
        <View>
          <Text style={styles.name}>{course.title}</Text>

          <Text style={styles.faculty}>{course.code}</Text>

          <Text style={styles.faculty}>{course.faculty}</Text>
          <Text>
            <Stars rating={course.rating} />
          </Text>
          <TouchableOpacity style={styles.button} onPress={addReview}>
            <Text style={styles.buttonText}>Add Review</Text>
          </TouchableOpacity>
        </View>
   
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  infoHeader: {
    flexDirection: "row",
    padding: 20,
  },
  info: {
    marginTop: 20,
  },
  name: {
    fontSize: 24,
  },
  faculty: {
    color: "grey",
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066cc",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 12,
    textAlign: "center",
  },
});

export default CourseDetails;
