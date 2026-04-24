import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { Link } from "expo-router";

export default function Cardapio() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>🍕 Cardápio</Text>

       <Image
        source={{ uri: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" }}
        style={styles.image}
      />


      {/* Calabresa */}
      <View style={styles.card}>
        <View>
          <Text style={styles.pizza}>🍕 Calabresa</Text>
          <Text style={styles.desc}>Molho de tomate, mussarela, calabresa e cebola</Text>
        </View>
        <Text style={styles.price}>R$ 35,00</Text>
      </View>

      {/* Mussarela */}
      <View style={styles.card}>
        <View>
          <Text style={styles.pizza}>🍕 Mussarela</Text>
          <Text style={styles.desc}>Molho de tomate, mussarela e orégano</Text>
        </View>
        <Text style={styles.price}>R$ 30,00</Text>
      </View>

      {/* Portuguesa */}
      <View style={styles.card}>
        <View>
          <Text style={styles.pizza}>🍕 Portuguesa</Text>
          <Text style={styles.desc}>Presunto, ovos, cebola, azeitona e mussarela</Text>
        </View>
        <Text style={styles.price}>R$ 40,00</Text>
      </View>

      {/* Frango */}
      <View style={styles.card}>
        <View>
          <Text style={styles.pizza}>🍕 Frango com Catupiry</Text>
          <Text style={styles.desc}>Frango desfiado, catupiry e molho de tomate</Text>
        </View>
        <Text style={styles.price}>R$ 42,00</Text>
      </View>

      {/* 4 queijos */}
      <View style={styles.card}>
        <View>
          <Text style={styles.pizza}>🍕 Quatro Queijos</Text>
          <Text style={styles.desc}>Mussarela, parmesão, provolone e catupiry</Text>
        </View>
        <Text style={styles.price}>R$ 45,00</Text>
      </View>

      {/* Bacon */}
      <View style={styles.card}>
        <View>
          <Text style={styles.pizza}>🍕 Bacon</Text>
          <Text style={styles.desc}>Bacon crocante, mussarela e molho especial</Text>
        </View>
        <Text style={styles.price}>R$ 43,00</Text>
      </View>

      {/* Marguerita */}
      <View style={styles.card}>
        <View>
          <Text style={styles.pizza}>🍕 Marguerita</Text>
          <Text style={styles.desc}>Molho de tomate, mussarela, tomate e manjericão</Text>
        </View>
        <Text style={styles.price}>R$ 38,00</Text>
      </View>

      {/* Atum */}
      <View style={styles.card}>
        <View>
          <Text style={styles.pizza}>🍕 Atum</Text>
          <Text style={styles.desc}>Atum, cebola, mussarela e molho de tomate</Text>
        </View>
        <Text style={styles.price}>R$ 41,00</Text>
      </View>

      {/* Chocolate */}
      <View style={styles.card}>
        <View>
          <Text style={styles.pizza}>🍕 Chocolate</Text>
          <Text style={styles.desc}>Chocolate ao leite derretido com cobertura doce</Text>
        </View>
        <Text style={styles.price}>R$ 36,00</Text>
      </View>

      {/* Romeu e Julieta */}
      <View style={styles.card}>
        <View>
          <Text style={styles.pizza}>🍕 Romeu e Julieta</Text>
          <Text style={styles.desc}>Queijo mussarela com goiabada</Text>
        </View>
        <Text style={styles.price}>R$ 37,00</Text>
      </View>

      {/* Botão voltar */}
      <Link href="/" style={styles.button}>
        <Text style={styles.buttonText}>⬅ Voltar</Text>
      </Link>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#d62828",
  },

  card: {
    width: "100%",
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  pizza: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  desc: {
    fontSize: 14,
    color: "#666",
    marginTop: 3,
    maxWidth: 200,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d62828",
  },

   image: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    marginBottom: 20,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#d62828",
    padding: 12,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});