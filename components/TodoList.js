import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem id={item.id} text={item.text} done={item.done} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: "#e0e0e0",
    height: 1,
  },
});
