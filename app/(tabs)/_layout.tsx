import { Tabs } from "expo-router";
import { Colors } from "@/utils/color";
import { Size } from "@/utils/helper";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.primary,
        tabBarInactiveTintColor: Colors.dark.textSubtle,
        tabBarStyle: {
          backgroundColor: Colors.dark.white,
          height: Size.heightPixel(64),
          elevation:9,
        },
        headerStyle: {
          backgroundColor: Colors.dark.white,
        },
        headerTintColor: Colors.dark.text,
        headerTitleStyle: {
          fontSize: Size.fontPixel(18),
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
