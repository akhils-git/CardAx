import { StyleSheet } from "react-native";
import Colors from "../../assets/StringAssets/Colors";

const PlayScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Background,
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 25,
    backgroundColor: "red",
  },
  cardPlayView: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "blue",
  },
  playButton: {
    backgroundColor: "green",
    padding: 90,
    alignItems: "center",
    backgroundColor: "red",
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
    backgroundColor: "blue",
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

export default PlayScreenStyles;
