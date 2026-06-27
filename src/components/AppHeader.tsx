import { StyleSheet, Text, View } from "react-native";
import { clr } from "@/lib/styles";

type AppHeaderProps = {
  title?: string;
};

export function AppHeader({
  title = "TrashAI",
}: AppHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 68,
    backgroundColor: clr.green_dark,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: clr.white,
    fontSize: 35,
    fontWeight: "900",
    letterSpacing: 0,
  },
});
