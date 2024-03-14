import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToDetails = () => {
    navigation.navigate("Detalles", {
      itemId: 123,
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={goToDetails}
        style={{ padding: 10, backgroundColor: "#007cc4", borderRadius: 5 }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Ver detalles</Text>
      </TouchableOpacity>
      <Footer />
    </View>
  );
}
