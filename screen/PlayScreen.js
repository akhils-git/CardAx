import React from "react";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Image,
  Keyboard,
} from "react-native";
class PlayScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test Data</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
});

export default PlayScreen;
