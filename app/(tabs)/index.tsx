import AnimatedNumber from "@/components/AnimatedNumber";
import Avatar from "@/components/Avatar";
import { RadioOption } from "@/components/RadioGroup";
import Select from "@/components/Select";
import Space from "@/components/Space";
import { Colors } from "@/utils/color";
import { Size } from "../../utils/helper";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TrackerChart } from "@/components/TrackerChart";

const durationList = [
  { label: "This day", value: "day" },
  { label: "This week", value: "week" },
  { label: "This month", value: "month" },
];

const mockData = {
  income: 2500,
  spending: 1850,
  chart: {
    labels: ["15", "16", "17", "18", "19", "20"],
    income: [180, 240, 180, 230, 320, 250],
    spending: [110, 200, 100, 170, 240, 160],
  },
};

export default function HomeScreen() {
  const [duration, setDuration] = useState<RadioOption>(durationList[0]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Avatar name="CG" />
        <Space height={16} />
        {/* Balance Card */}
        <LinearGradient
          colors={["#2357D9", "#245EE9", "#1542A9"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.balanceCard}
        >
          <Text style={styles.greeting}>Good morning, Cong!</Text>
          <Space height={20} />
          <View style={styles.balanceRow}>
            <Text style={styles.balanceCurrency}>$</Text>
            <AnimatedNumber
              value={12345.67}
              style={styles.balanceAmount}
              duration={600}
            />
          </View>
          <View style={styles.balanceAmountView}>
            <Space width={8} />
            <View style={styles.balanceChange}>
              <Text style={styles.balanceChangeText}>-$1,234 this week</Text>
            </View>
            <Space width={8} />
            <View style={styles.balanceChange}>
              <Text style={styles.balanceChangeText}>+$1,234 this month</Text>
            </View>
          </View>
        </LinearGradient>
        <Space height={20} />
        <View style={styles.transactionContainer}>
          <View style={styles.transactionHeader}>
            <View style={styles.transactionIcon}>
              <Ionicons
                name="wallet-outline"
                size={Size.fontPixel(16)}
                color={Colors.dark.primary}
              />
            </View>
            <Space width={12} />
            <Text style={styles.transactionTitle}>Tracker</Text>
            <Space width={12} />
            <Ionicons
              name="alert-circle-outline"
              size={Size.fontPixel(20)}
              color={Colors.dark.textSubtle}
            />
            <Space style={{ flex: 1 }} />
            <Select
              options={durationList}
              title="Duration"
              onChangeValue={(option) => {
                setDuration(option);
              }}
              value={duration as any}
              controller={
                <View style={styles.transactionControl}>
                  <Text style={styles.transactionControlLabel}>
                    {duration?.label}
                  </Text>
                  <Space width={4} />
                  <Ionicons
                    name="chevron-down"
                    size={Size.fontPixel(20)}
                    color={Colors.dark.textSubtle}
                  />
                </View>
              }
            />
          </View>
          <Space height={16} />
          <TrackerChart data={mockData} />
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
    padding: Size.widthPixel(16),
    paddingBottom: Size.heightPixel(32),
  },
  balanceCard: {
    borderRadius: Size.borderRadius,
    padding: Size.widthPixel(20),
    marginBottom: Size.heightPixel(24),
    shadowColor: "#4C49ED",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  greeting: {
    fontSize: Size.fontPixel(20),
    color: Colors.dark.white,
    marginBottom: Size.heightPixel(8),
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Size.heightPixel(16),
  },
  balanceCurrency: {
    fontSize: Size.fontPixel(32),
    fontWeight: "bold",
    color: Colors.dark.white,
    marginRight: Size.widthPixel(4),
  },
  balanceAmountView: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: Size.heightPixel(8),
  },
  balanceAmount: {
    fontSize: Size.fontPixel(32),
    fontWeight: "bold",
    color: Colors.dark.white,
  },
  balanceChange: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: Size.widthPixel(12),
    paddingVertical: Size.heightPixel(6),
    borderRadius: Size.borderRadius,
    alignSelf: "flex-start",
    marginTop: Size.heightPixel(8),
  },
  balanceChangeText: {
    fontSize: Size.fontPixel(14),
    color: Colors.dark.white,
    fontWeight: "600",
  },
  section: {
    marginBottom: Size.heightPixel(24),
  },
  sectionTitle: {
    fontSize: Size.fontPixel(18),
    fontWeight: "600",
    color: Colors.dark.text,
    marginBottom: Size.heightPixel(16),
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Size.heightPixel(16),
  },
  transactionContainer: {
    borderRadius: Size.borderRadius,
    backgroundColor: Colors.dark.white,
    elevation: 4,
    paddingVertical: Size.heightPixel(16),
    paddingHorizontal: Size.widthPixel(4),
  },
  transactionHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Size.widthPixel(16),
  },
  transactionIcon: {
    borderRadius: Size.borderRadius / 2,
    backgroundColor: Colors.dark.white,
    elevation: 4,
    paddingHorizontal: Size.widthPixel(8),
    height: Size.fontPixel(24),
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  transactionTitle: {
    fontSize: Size.fontPixel(22),
    lineHeight: Size.fontPixel(24),
    color: Colors.dark.text,
    fontWeight: "bold",
  },
  transactionControl: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: Colors.dark.textSubtle,
    paddingHorizontal: Size.widthPixel(8),
    paddingVertical: Size.widthPixel(4),
    borderRadius: Size.borderRadius / 2,
  },
  transactionControlLabel: {
    fontSize: Size.fontPixel(14),
    color: Colors.dark.text,
    fontWeight: "600",
  },
});
