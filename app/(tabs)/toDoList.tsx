import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { useTarefas } from '@/hooks/useTarefas';

export default function App() {
  const {
    tarefas,
    novaTarefa,
    setNovaTarefa,
    adicionarTarefa,
    removerTarefa
  } = useTarefas();

  return (
    <View style={styles.container}>

      {/* Título */}
      <Text style={styles.titulo}>🍕 Melhores Pizzas</Text>

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome da pizza..."
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />

        <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Nenhuma pizza adicionada ainda 😢
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.textoPizza}>🍕 {item.texto}</Text>

            <TouchableOpacity
              style={styles.botaoRemover}
              onPress={() => removerTarefa(item.id)}
            >
              <Text style={styles.remover}>🗑</Text>
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#d62828',
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },

  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
  },

  botao: {
    backgroundColor: '#d62828',
    paddingHorizontal: 18,
    justifyContent: 'center',
    borderRadius: 10,
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    elevation: 3,
  },

  textoPizza: {
    fontSize: 16,
    color: '#333',
  },

  botaoRemover: {
    backgroundColor: '#ffe5e5',
    padding: 8,
    borderRadius: 8,
  },

  remover: {
    fontSize: 16,
  },

  empty: {
    textAlign: 'center',
    marginTop: 50,
    color: '#999',
  },
});