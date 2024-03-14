import React from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Footer from "../components/Footer";

export default function DetailsScreen() {
  const route = useRoute();
  const { itemId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detalles del item {itemId}</Text>
      <Footer />
    </View>
  );
}