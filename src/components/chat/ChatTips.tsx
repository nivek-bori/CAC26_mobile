import { clr } from "@/lib/styles";
import { StyleSheet, Text, View } from "react-native";

const tips = [
  "Can I recycle this pizza box?",
  "Where do batteries go?",
  "Is this compostable?",
  "What bin should this go in?",
];

export function ChatTips() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Try Searching:</Text>

      <View style={styles.list}>
        {tips.map((tip) => (
          <Text key={tip} style={styles.tip}>
            {`•  ${tip}`}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 4,
  },
  title: {
    color: clr.gray_dark,
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 8,
  },
  list: {
    gap: 2,
  },
  tip: {
    color: clr.gray_dark,
    fontSize: 16,
    lineHeight: 22,
  },
});
