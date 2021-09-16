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
    backgroundColor: Colors.Title,
  },
  cardPlayView: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.CardPlayArea,
  },
  playButton: {
    backgroundColor: "green",
    padding: 90,
    alignItems: "center",
    backgroundColor: Colors.ButtonArea,
  },
  dealButtonImage: {
    width: 150,
    height: 50,
  },
  playBoard: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.Background,
    padding: 10,
  },
  playBoardTotalScore: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.Background,
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
