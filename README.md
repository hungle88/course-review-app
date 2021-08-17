## Course Review App

## React Native Application

- Application structure:
  - Material Bottom Tab Navigator
    - Stack Navigator
      - CoursesList screen
      - CourseDetails screen
      - AddReview screen
    - About screen
- Live Search and list of courses is displayed using `FlatList`. The `Course` reusable component renders a single course.
- The form persists the user name in the phone local storage using `AsyncStorage`. The next time a user opens the screen, their name has to be fetched from local storage.
