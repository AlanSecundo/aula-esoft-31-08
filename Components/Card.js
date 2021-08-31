import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: 334,
    height: 114,
    backgroundColor: "#8BD674",
    color: "#ffffff",
    padding: 20,
    marginTop: 30,
    borderRadius: 10,
  },
  text: {
    color: "white",
  },
});

const Card = ({ pokeId, pokeName }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{pokeId}</Text>
      <Text style={styles.text}>{pokeName}</Text>
    </View>
  );
};

export default Card;
