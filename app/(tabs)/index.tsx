import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      
      {/* Título */}
      <Text style={styles.title}>Pizzaria Nono Romano 🍕</Text>

      {/* Imagem abaixo do título */}
      <Image
        source={{ uri: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" }}
        style={styles.image}
      />

      {/* Descrição */}
      <Text style={styles.subtitle}>
        As melhores pizzas da cidade, feitas com amor!
      </Text>

      {/* Botão */}
      <Link href="/about" style={styles.button}>
        <Text style={styles.buttonText}>Ver Cardápio</Text>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 20,
    marginVertical: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d62828",
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginVertical: 10,
  },

  button: {
    backgroundColor: "#d62828",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});