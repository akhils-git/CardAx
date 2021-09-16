import React from "react";
import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import PlayScreenStyles from "./PlayScreenStyle";
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
      cpuPlayedCard: require("./../../assets/GameImages/card2.png"),
      userPlayedCard: require("./../../assets/GameImages/card3.png"),
      playerScore: 0,
      cpuScore: 0,
    };
  }

  play = () => {
    const Images = [
      require("./../../assets/GameImages/card2.png"),
      require("./../../assets/GameImages/card3.png"),
      require("./../../assets/GameImages/card4.png"),
      require("./../../assets/GameImages/card5.png"),
      require("./../../assets/GameImages/card6.png"),
      require("./../../assets/GameImages/card7.png"),
      require("./../../assets/GameImages/card8.png"),
      require("./../../assets/GameImages/card9.png"),
      require("./../../assets/GameImages/card10.png"),
      require("./../../assets/GameImages/card11.png"),
      require("./../../assets/GameImages/card12.png"),
      require("./../../assets/GameImages/card13.png"),
      require("./../../assets/GameImages/card14.png"),
    ];
    let cpu = Math.floor(Math.random() * (14 - 2 + 1) + 2);
    let user = Math.floor(Math.random() * (14 - 2 + 1) + 2);
    // console.log("user v", user);
    // console.log("cpu v", cpu);
    this.setState({
      cpuPlayed: cpu,
      playerPlayed: user,
      cpuPlayedCard: Images[cpu - 2],
      userPlayedCard: Images[user - 2],
      cpuScore: this.state.cpuScore + cpu,
      playerScore: this.state.playerScore + user,
    });
  };

  render() {
    console.log("cpu-card path", this.state.cpuPlayedCard);
    // console.log("user-card path", CardImages[1]);
    return (
      <SafeAreaView>
        {/* Title */}
        <View style={PlayScreenStyles.container}>
          <View style={PlayScreenStyles.title}>
            <Image source={require("./../../assets/GameImages/logo.png")} />
          </View>
          {/* cardPlayView */}
          <View style={PlayScreenStyles.cardPlayView}>
            <Image source={this.state.cpuPlayedCard} />
            <Image source={this.state.userPlayedCard} />
          </View>
          <View style={PlayScreenStyles.playButton}>
            <TouchableOpacity onPress={this.play}>
              <Image
                style={PlayScreenStyles.dealButtonImage}
                source={require("./../../assets/GameImages/dealbutton.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={PlayScreenStyles.playBoard}>
            <Text style={PlayScreenStyles.textPlayed}>Player Played</Text>
            <Text style={PlayScreenStyles.textPlayed}>CPU Played</Text>
          </View>
          <View style={PlayScreenStyles.playBoard}>
            <Text style={PlayScreenStyles.textPlayed}>
              {this.state.cpuPlayed}
            </Text>
            <Text style={PlayScreenStyles.textPlayed}>
              {this.state.playerPlayed}
            </Text>
          </View>
          <View style={PlayScreenStyles.playBoardTotalScore}>
            <Text style={PlayScreenStyles.textTotalScore}>Player Score</Text>
            <Text style={PlayScreenStyles.textTotalScore}>CPU Score</Text>
          </View>
          <View style={PlayScreenStyles.playBoardTotalScore}>
            <Text style={PlayScreenStyles.textTotalScore}>
              {this.state.cpuScore}
            </Text>
            <Text style={PlayScreenStyles.textTotalScore}>
              {this.state.playerScore}
            </Text>
          </View>

          <StatusBar hidden />
        </View>
      </SafeAreaView>
    );
  }
}

export default PlayScreen;
