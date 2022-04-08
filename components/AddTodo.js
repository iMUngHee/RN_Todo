import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
} from "react-native";

const AddTodo = () => {
  const [text, setText] = React.useState("");
  const onPress = () => {
    setText("");
    Keyboard.dismiss();
  };
  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require("../assets/icons/add_white/add_white.png")} />
    </View>
  );
  return (
    <View style={styles.block}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="할 일을 입력하세요."
        style={styles.input}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        {button}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: "#fff7ff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    flex: 1,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    backgroundColor: "#d1c4e9",
    borderRadius: 24,
  },
});

export default AddTodo;
