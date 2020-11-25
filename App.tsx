import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Image,Pressable,StyleSheet, Text, View } from "react-native";
import logo1 from "./assets/egg01.png";
import logo2 from "./assets/egg02.png";
import logo3 from "./assets/egg03.png";

export default function App() {
  let [count,setCount] = React.useState(100);

  let countDown = () => {
    setCount(count - 1);
  }
  let word;
  if (count === 75) {
    word = "がんばれ";
  } else if (count === 50) {
    word = "がんばれ";
  } else if (count === 25) {
    word = "がんばれ";
  } else if (count === 0) {
    word = "おわり"; 
  }
  let film;
  if (count <= 100 && count >= 41) {
  film = logo1;
  } else if (count <= 40 && count >= 1) {
  film = logo2;
  } else if (count === 0 ) {
  film = logo3; 
  }
  
  if (count !== 75 && count !== 50 && count !== 25 && count !== 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.numberText}>{count}</Text>
        <Pressable onPress={countDown}>
          <Image source={film} />
        </Pressable>
        <StatusBar style="auto" />
      </View>
    );
  } else if (count === 0){
    return (
      <View style={styles.container}>
        <Text style={styles.numberText}>{count}</Text>
        <Image source={film} />
        <StatusBar style="auto" />
      </View>
    );
    } else {
    return (
      <View style={styles.container}>
        <Pressable onPress={countDown}>
          <Image source={film} />
        </Pressable>
        <Text style={styles.wordText}>{word}</Text>
        <StatusBar style="auto" />
      </View>
    );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    textAlign: "center",
    width: "100%",
    position: "absolute",
    top: 50,
    fontSize: 100,
    color: "blue",
    backgroundColor: "black",
  },
  wordText: {
    textAlign: "center",
    width: "100%",
    position: "absolute",
    top: 50,
    fontSize: 60,
    color: "blue",
    backgroundColor: "black",
    height: 120,
  },
});


