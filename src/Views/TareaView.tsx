import { Tarea } from "@/Models/Entities/Tarea";
import { TareaViewModel } from "@/ViewModels/TareaViewModel";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from "react";


export default function TareaView(){
  const [viewModel] = useState(() => new TareaViewModel()); 

  const renderItem = ({ item }: { item: Tarea }) => (
    <TouchableOpacity
      style={styles.itemContainer}
    > 
      <Text style={styles.nombre}>
        {item.id} {item.titulo}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de Tareas</Text>

      <FlatList
        data={viewModel.tareas}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  nombre: {
    fontSize: 16,
    color: '#2c3e50',
  },
  separator: {
    height: 10,
  },
});