import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DateHead = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const { top } = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <StatusBar backgroundColor="#512da8" barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.dateText}>
          {year}년 {month}월 {day}일
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: "#512da8",
  },
  block: {
    padding: 16,
    backgroundColor: "#512da8",
  },
  dateText: {
    fontSize: 24,
    color: "#fff",
  },
});

export default DateHead;
