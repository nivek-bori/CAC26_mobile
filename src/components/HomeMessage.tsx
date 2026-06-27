import { clr } from "@/lib/styles";
import { Trash } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export function HomeMessage({ message }: { message: string }) {
  return (
    <View style={styles.container}>
      <Trash color={clr.black} size={100} strokeWidth={2.5} />

      <Text style={styles.message}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 36,
    paddingTop: 10,
  },
  message: {
    marginTop: 48,
    color: clr.black,
    fontSize: 24,
    lineHeight: 36,
    textAlign: "center",
    alignSelf: "center",
    width: "80%",
  },
});