import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Empty() {
  return (
    <View style={styles.block}>
      <Image
        source={require("../assets/images/young_and_happy.png")}
        style={styles.image}
      />
      <Text style={styles.description}>다 했다!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    fontSize: 24,
    color: "#9e9e9e",
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
});
