import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/color";
import { SIZE } from "@/constants/helper";
import { Ionicons } from "@expo/vector-icons";

// Dummy data for transactions
const transactions = [
  {
    id: "1",
    title: "Grocery Shopping",
    amount: -85.5,
    date: "Today",
    category: "shopping",
  },
  {
    id: "2",
    title: "Salary Deposit",
    amount: 3500.0,
    date: "Yesterday",
    category: "income",
  },
  {
    id: "3",
    title: "Restaurant",
    amount: -45.8,
    date: "Yesterday",
    category: "food",
  },
  // Add more transactions as needed
];

function TransactionItem({ item }: { item: (typeof transactions)[0] }) {
  const isExpense = item.amount < 0;

  return (
    <View style={styles.transactionItem}>
      <View style={styles.transactionIcon}>
        <Ionicons
          name={isExpense ? "arrow-down-outline" : "arrow-up-outline"}
          size={24}
          color={isExpense ? Colors.dark.textSubtle : Colors.dark.primary}
        />
      </View>
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionTitle}>{item.title}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text
        style={[
          styles.transactionAmount,
          isExpense ? styles.expenseText : styles.incomeText,
        ]}
      >
        {isExpense ? "-" : "+"}${Math.abs(item.amount).toFixed(2)}
      </Text>
    </View>
  );
}

export default function TransactionsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Monthly Summary */}
      <View style={styles.summary}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Income</Text>
          <Text style={[styles.summaryAmount, styles.incomeText]}>
            +$3,500.00
          </Text>
        </View>
        <View style={styles.summaryDivider} />
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Expenses</Text>
          <Text style={[styles.summaryAmount, styles.expenseText]}>
            -$1,234.50
          </Text>
        </View>
      </View>

      {/* Transactions List */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem item={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.white,
  },
  summary: {
    flexDirection: "row",
    padding: SIZE.widthPixel(16),
    backgroundColor: Colors.dark.backgroundLight,
    marginHorizontal: SIZE.widthPixel(16),
    marginVertical: SIZE.heightPixel(16),
    borderRadius: SIZE.borderRadius,
  },
  summaryItem: {
    flex: 1,
    alignItems: "center",
  },
  summaryDivider: {
    width: 1,
    backgroundColor: Colors.dark.textSubtle,
    opacity: 0.2,
    marginHorizontal: SIZE.widthPixel(16),
  },
  summaryLabel: {
    fontSize: SIZE.fontPixel(14),
    color: Colors.dark.textSubtle,
    marginBottom: SIZE.heightPixel(4),
  },
  summaryAmount: {
    fontSize: SIZE.fontPixel(18),
    fontWeight: "600",
  },
  listContainer: {
    padding: SIZE.widthPixel(16),
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SIZE.heightPixel(12),
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark.backgroundLight,
  },
  transactionIcon: {
    width: SIZE.widthPixel(40),
    height: SIZE.heightPixel(40),
    borderRadius: SIZE.borderRadius,
    backgroundColor: Colors.dark.backgroundLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SIZE.widthPixel(12),
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: SIZE.fontPixel(16),
    color: Colors.dark.text,
    marginBottom: SIZE.heightPixel(4),
  },
  transactionDate: {
    fontSize: SIZE.fontPixel(14),
    color: Colors.dark.textSubtle,
  },
  transactionAmount: {
    fontSize: SIZE.fontPixel(16),
    fontWeight: "600",
  },
  incomeText: {
    color: Colors.dark.primary,
  },
  expenseText: {
    color: Colors.dark.textSubtle,
  },
});
