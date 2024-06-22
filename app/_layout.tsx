import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101114",
    flex: 1,
  },
});