import { Tabs } from "expo-router";
import { Colors } from "@/constants/color";
import { SIZE } from "@/constants/helper";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.primary,
        tabBarInactiveTintColor: Colors.dark.textSubtle,
        tabBarStyle: {
          backgroundColor: Colors.dark.white,
          borderTopWidth: 1,
          borderTopColor: Colors.dark.border,
          height: SIZE.heightPixel(80),
          paddingBottom: SIZE.heightPixel(20),
          paddingTop: SIZE.heightPixel(10),
        },
        headerStyle: {
          backgroundColor: Colors.dark.white,
        },
        headerTintColor: Colors.dark.text,
        headerTitleStyle: {
          fontSize: SIZE.fontPixel(18),
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
