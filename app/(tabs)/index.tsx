import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/color";
import { SIZE } from "@/constants/helper";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>$12,345.67</Text>
          <View style={styles.balanceChange}>
            <Text style={styles.balanceChangeText}>+$1,234 this month</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            {/* Add your quick action buttons here */}
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          {/* Add your transaction list here */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.white,
  },
  scrollView: {
    flex: 1,
    padding: SIZE.widthPixel(16),
  },
  balanceCard: {
    backgroundColor: Colors.dark.primary,
    borderRadius: SIZE.borderRadius,
    padding: SIZE.widthPixel(20),
    marginBottom: SIZE.heightPixel(24),
  },
  balanceLabel: {
    fontSize: SIZE.fontPixel(14),
    color: Colors.dark.white,
    opacity: 0.8,
    marginBottom: SIZE.heightPixel(8),
  },
  balanceAmount: {
    fontSize: SIZE.fontPixel(32),
    fontWeight: "bold",
    color: Colors.dark.white,
    marginBottom: SIZE.heightPixel(16),
  },
  balanceChange: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: SIZE.widthPixel(12),
    paddingVertical: SIZE.heightPixel(6),
    borderRadius: SIZE.borderRadius,
    alignSelf: "flex-start",
  },
  balanceChangeText: {
    fontSize: SIZE.fontPixel(14),
    color: Colors.dark.white,
  },
  section: {
    marginBottom: SIZE.heightPixel(24),
  },
  sectionTitle: {
    fontSize: SIZE.fontPixel(18),
    fontWeight: "600",
    color: Colors.dark.text,
    marginBottom: SIZE.heightPixel(16),
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZE.heightPixel(16),
  },
});
