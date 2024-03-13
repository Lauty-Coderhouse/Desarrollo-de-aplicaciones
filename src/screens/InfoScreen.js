import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Constants from "expo-constants";

const InfoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
      >{`Screen 2 - API URL: ${Constants.expoConfig.extra.apiUrl}`}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Screen1")}
      >
        <Text style={styles.buttonText}>Regresar a la pantalla 1</Text>
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

export default InfoScreen;
