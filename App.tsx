import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const handlePress = () =>
    Linking.openURL(
      "https://github.com/Lauty-Coderhouse/Desarrollo-de-aplicaciones/tree/desafio-1-ts"
    );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Hola, Coder! 👋</Text>
      <Text style={{ fontSize: 25, paddingTop: 20 }}>Este es otro texto</Text>

      <Image
        source={{
          uri: "https://styles.redditmedia.com/t5_5blkvq/styles/communityIcon_t5ji6wuld2z71.jpg?format=pjpg&s=1672be49333cd14749784be8bbc3c968a033d8e0",
        }}
        style={styles.image}
      />

      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Icon name="github" size={30} color="white" />
        <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>
          {" "}
          Ver repositorio
        </Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={{ color: "white", fontSize: 20 }}>Lautaro Chavero</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: 20,
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  button: {
    margin: 50,
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
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
