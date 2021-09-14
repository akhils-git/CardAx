import React from "react";
import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Image,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

class PlayScreen extends Component {
  constructor() {
    super();
    this.state = {
      playerPlayed: 0,
      cpuPlayed: 0,
      cpuPlayedCard: require("../assets/GameImages/card2.png"),
      userPlayedCard: require("../assets/GameImages/card3.png"),
      playerScore: 0,
      cpuScore: 0,
    };
  }

  play = () => {
    const Images = [
      require("../assets/GameImages/card2.png"),
      require("../assets/GameImages/card3.png"),
      require("../assets/GameImages/card4.png"),
      require("../assets/GameImages/card5.png"),
      require("../assets/GameImages/card6.png"),
      require("../assets/GameImages/card7.png"),
      require("../assets/GameImages/card8.png"),
      require("../assets/GameImages/card9.png"),
      require("../assets/GameImages/card10.png"),
      require("../assets/GameImages/card11.png"),
      require("../assets/GameImages/card12.png"),
      require("../assets/GameImages/card13.png"),
      require("../assets/GameImages/card14.png"),
    ];
    let cpu = Math.floor(Math.random() * (14 - 2 + 1) + 2);
    let user = Math.floor(Math.random() * (14 - 2 + 1) + 2);
    console.log("user v", user);
    console.log("cpu v", cpu);
    this.setState({
      cpuPlayed: cpu,
      playerPlayed: user,
      cpuPlayedCard: Images[cpu - 2],
      userPlayedCard: Images[user - 2],
      cpuScore: this.state.cpuScore + cpu,
      playerScore: this.state.playerScore + user,
    });

    // if (this.state.playerScore > 10) {
    //   alert("You are Wins");
    //   this.state.playerScore = 0;
    // }
    // if (this.state.cpuScore > 10) {
    //   alert("CPU Wins");
    //   this.state.cpuScore = 0;
    // }
  };

  render() {
    console.log("cpu-card path", this.state.cpuPlayedCard);
    console.log("user-card path", this.state.userPlayedCard);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Image source={require("../assets/GameImages/logo.png")} />
        </View>
        <View style={styles.cardPlayView}>
          <Image source={this.state.cpuPlayedCard} />
          <Image source={this.state.userPlayedCard} />
        </View>
        <View style={styles.playButton}>
          <TouchableOpacity onPress={this.play}>
            <Image
              style={styles.dealButtonImage}
              source={require("../assets/GameImages/dealbutton.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.playBoard}>
          <Text style={styles.textPlayed}>Player Played</Text>
          <Text style={styles.textPlayed}>CPU Played</Text>
        </View>
        <View style={styles.playBoard}>
          <Text style={styles.textPlayed}>{this.state.cpuPlayed}</Text>
          <Text style={styles.textPlayed}>{this.state.playerPlayed}</Text>
        </View>
        <View style={styles.playBoardTotalScore}>
          <Text style={styles.textTotalScore}>Player Score</Text>
          <Text style={styles.textTotalScore}>CPU Score</Text>
        </View>
        <View style={styles.playBoardTotalScore}>
          <Text style={styles.textTotalScore}>{this.state.cpuScore}</Text>
          <Text style={styles.textTotalScore}>{this.state.playerScore}</Text>
        </View>
        <StatusBar hidden />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 160,
  },
  cardPlayView: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "green",
    padding: 10,
  },
  playButton: {
    backgroundColor: "green",
    padding: 90,
    alignItems: "center",
  },
  dealButtonImage: {
    width: 150,
    height: 50,
  },
  playBoard: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "green",
    padding: 10,
  },
  playBoardTotalScore: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "green",
    padding: 10,
  },
  textTotalScore: {
    fontSize: 18,
    color: "white",
  },
  textPlayed: {
    fontSize: 22,
    color: "white",
  },
});

export default PlayScreen;
