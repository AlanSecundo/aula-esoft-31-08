import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import Card from "../Components/Card";

const Home = () => {
  return (
    <ScrollView>
      {[1, 2, 3].map((element) => (
        <Card pokeId="001" pokeName="Bulbasauro" />
      ))}
    </ScrollView>
  );
};

export default Home;
