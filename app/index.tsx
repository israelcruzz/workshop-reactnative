import { characters } from "@/src/date";
import { Link } from "expo-router";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("@/src/assets/images/profile-workshop.png")}
          style={styles.headerImage}
        />

        <View style={styles.textArea}>
          <Text style={styles.textHeading}>Bem Vindo</Text>
          <Text style={styles.textDetails}>Israel Cruz</Text>
        </View>
      </View>

      {/* Texto */}
      <Text style={styles.textHeading}>Meus campeões</Text>

      {/* Area Cards */}
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.cardArea}>
          {characters.map((character) => {
            return (
              <Link href={`/character/${character.name}`}>
                <TouchableOpacity style={styles.gameCard}>
                  <Image
                    source={character.imageUri}
                    style={styles.gameCardImage}
                  />

                  <View style={styles.textArea}>
                    <Text style={styles.textHeading}>{character.name}</Text>
                    <Text style={styles.textDetails}>
                      {character.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Link>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 900,
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 48 + 16,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    marginBottom: 56
  },
  headerImage: {
    width: 56,
    height: 56,
    objectFit: "cover",
  },
  textArea: {
    gap: 2,
  },
  textHeading: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFFFFF",
  },
  textDetails: {
    fontWeight: "regular",
    fontSize: 12,
    color: "#B3B0B8",
  },
  cardArea: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 24
  },
  gameCard: {
    width: 168,
    height: 238,
    gap: 12,
  },
  gameCardImage: {
    width: "100%",
    height: "70%",
    objectFit: "cover",
    borderRadius: 8,
  },
});
