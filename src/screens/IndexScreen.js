import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Constants from "expo-constants";

const IndexScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
      >{`Screen 1 de ${Constants.expoConfig.extra.appName}`}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text style={styles.buttonText}>Ir a la pantalla 2</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={{ color: "white", fontSize: 20 }}>Lautaro Chavero</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "MadimiOne",
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "MadimiOne",
  },
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

export default IndexScreen;
