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
  baseUrl = "../assets/GameImages/card2.png";
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>Deal Game</Text>
        </View>
        <View style={styles.cardPlayView}>
          <Image source={require("../assets/GameImages/card2.png")} />
          <Image source={require("../assets/GameImages/card3.png")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  cardPlayView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default PlayScreen;
