import React, { useState, useEffect } from "react";
import Stars from "components/Stars";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";

const AddReview = ({ route: { params } }) => {
  const [reviewState, setReviewState] = useState({
    name: "",
    rating: 0,
    comment: "",
    submitting: false,
  });
  const course = params;

  const courseCode = params.code;
  const navigation = useNavigation();
  useEffect(() => {
    getData();
  }, []);
  const inputChange = (name, value) => {
    setReviewState({ ...reviewState, [name]: value });
  };
  // let starColor="lightgrey";

  const getData = async () => {
    // try {
    //   const value = await AsyncStorage.getItem("@storage_Key");
    //   if (value !== null) {
    // setReviewState({ ...reviewState, name: value });
    //   }
    // } catch (e) {
    //   // error reading value
    // }

    try {
      const jsonValue = await AsyncStorage.getItem(courseCode);
      if (jsonValue) {
        setReviewState(JSON.parse(jsonValue));
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  const submit = async (value) => {
    // try {
    //   setReviewState({ ...reviewState, submitting: true });
    //   await AsyncStorage.setItem("@storage_Key", reviewState.name);
    // navigation.goBack();
    // } catch (e) {
    //   // saving error
    // }
    try {
      const jsonValue = JSON.stringify(reviewState);
      await AsyncStorage.setItem(courseCode, jsonValue);
      console.log("clicked");

      navigation.goBack();
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  // another solution for star rating
  // let greyStar = null;
  // if ((reviewState.rating === 1)) {
  //   greyStar = (
  //     <Text>
  //       <AntDesign name="star" size={50} color="lightgrey" />
  //       <AntDesign name="star" size={50} color="lightgrey" />
  //       <AntDesign name="star" size={50} color="lightgrey" />
  //       <AntDesign name="star" size={50} color="lightgrey" />
  //     </Text>
  //   );
  // }
  // if ((reviewState.rating === 2)) {
  //   greyStar = (
  //     <Text>
  //       <AntDesign name="star" size={50} color="lightgrey" />
  //       <AntDesign name="star" size={50} color="lightgrey" />
  //       <AntDesign name="star" size={50} color="lightgrey" />
  //     </Text>
  //   );
  // }
  // if ((reviewState.rating === 3)) {
  //   greyStar = (
  //     <Text>
  //       <AntDesign name="star" size={50} color="lightgrey" />
  //       <AntDesign name="star" size={50} color="lightgrey" />

  //     </Text>
  //   );
  // }
  // if ((reviewState.rating === 4)) {
  //   greyStar = (
  //     <Text>
  //       <AntDesign name="star" size={50} color="lightgrey" />

  //     </Text>
  //   );
  // }

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAwareScrollView extraScrollHeight={40}>
        <Text style={styles.addReview}>Add Review</Text>
        <TextInput
          style={styles.input}
          defaultValue={reviewState.name}
          placeholder="Hung Le"
          onChangeText={(text) => inputChange("name", text)}
        />

        <Text style={styles.rating}>Your Rating</Text>
        <Text style={{ alignSelf: "center" }}>
          {[1, 2, 3, 4, 5].map((n, i) =>
            n > reviewState.rating ? (
              <TouchableOpacity
                key={i}
                onPress={() => setReviewState({ ...reviewState, rating: n })}
              >
                <AntDesign key={i} name="star" size={50} color="lightgrey" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                key={i}
                onPress={() => setReviewState({ ...reviewState, rating: n })}
              >
                <AntDesign key={i} name="star" size={50} color="#FFD64C" />
              </TouchableOpacity>
            )
          )}
        </Text>

        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Review"
          multiline={true}
          value={reviewState.comment}
          onChangeText={(text) => inputChange("comment", text)}
        />
        {reviewState.submitting && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
        <View style={styles.submitButton}>
          <Button color="white" title="Submit Review" onPress={submit} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
  },
  rating: {
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    marginVertical: 40,
  },
  stars: {
    marginBottom: 80,
    flexDirection: "row",
    justifyContent: "center",
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0066cc",
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

export default AddReview;
