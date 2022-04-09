import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AddTodo from "./components/AddTodo";
import DateHead from "./components/DateHead";
import Empty from "./components/Empty";
import TodoList from "./components/TodoList";

function App() {
  const today = new Date();
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Task1", done: true },
    { id: 2, text: "Task2", done: false },
    { id: 3, text: "Task3", done: false },
  ]);
  const onInsert = (text) => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos([...todos, todo]);
  };
  const onToggle = (id) => {
    const nextTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo,
    );
    setTodos(nextTodos);
  };
  const onRemove = (id) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#fff" }}
        edges={["bottom"]}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.select({ ios: "padding" })}
        >
          <DateHead date={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
