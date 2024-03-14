import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={{ color: "white", fontSize: 20 }}>Lautaro Chavero</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "black",
    padding: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
