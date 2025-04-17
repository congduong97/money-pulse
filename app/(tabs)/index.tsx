import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/color";
import { SIZE } from "@/constants/helper";
import AnimatedNumber from "@/components/AnimatedNumber";
import { LinearGradient } from "expo-linear-gradient";
import Space from "@/components/Space";
import Avatar from "@/components/Avatar";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
        <Space height={20}/>
        <View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.dark.white
  },
  scrollView: {
    flex: 1,
    padding: SIZE.widthPixel(16),
  },
  balanceCard: {
    borderRadius: SIZE.borderRadius,
    padding: SIZE.widthPixel(20),
    marginBottom: SIZE.heightPixel(24),
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
    fontSize: SIZE.fontPixel(20),
    color: Colors.dark.white,
    marginBottom: SIZE.heightPixel(8),
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZE.heightPixel(16),
  },
  balanceCurrency: {
    fontSize: SIZE.fontPixel(32),
    fontWeight: "bold",
    color: Colors.dark.white,
    marginRight: SIZE.widthPixel(4),
  },
  balanceAmountView:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:SIZE.heightPixel(8)
  },
  balanceAmount: {
    fontSize: SIZE.fontPixel(32),
    fontWeight: "bold",
    color: Colors.dark.white,
  },
  balanceChange: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: SIZE.widthPixel(12),
    paddingVertical: SIZE.heightPixel(6),
    borderRadius: SIZE.borderRadius,
    alignSelf: "flex-start",
    marginTop:SIZE.heightPixel(8)
  },
  balanceChangeText: {
    fontSize: SIZE.fontPixel(14),
    color: Colors.dark.white,
    fontWeight:'600'
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
