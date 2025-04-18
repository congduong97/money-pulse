import { Colors } from "@/utils/color";
import { SCREEN_WIDTH, Size } from "@/utils/helper";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LineChart } from 'react-native-gifted-charts';
import Animated, { FadeInDown } from "react-native-reanimated";

interface TrackerData {
  income: number;
  spending: number;
  chart: {
    labels: string[];
    income: number[];
    spending: number[];
  };
}

interface TrackerChartProps {
  data: TrackerData;
}

export const TrackerChart = ({ data }: TrackerChartProps) => {
  const lineData = data.chart.income.map((value, index) => ({
    value,
    dataPointText: value.toString(),
    label: data.chart.labels[index],
  }));

  const lineData2 = data.chart.spending.map((value, index) => ({
    value,
    dataPointText: value.toString(),
    label: data.chart.labels[index],
  }));
  const chartWidth = SCREEN_WIDTH - 5 * Size.widthPixel(16);
  return (
    <Animated.View 
      entering={FadeInDown.duration(600)} 
      style={styles.container}
    >
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.label}>Income</Text>
          <Text style={styles.amount}>${data.income.toLocaleString()}</Text>
        </View>
        <View>
          <Text style={styles.label}>Spending</Text>
          <Text style={styles.amount}>${data.spending.toLocaleString()}</Text>
        </View>
      </View>

      <LineChart
        data={lineData}
        data2={lineData2}
        height={250}
        spacing={44}
        initialSpacing={0}
        color1={Colors.dark.primary}
        color2={Colors.dark.secondary}
        textColor1={Colors.dark.text}
        textColor2={Colors.dark.text}
        hideDataPoints
        curved
        isAnimated
        width={chartWidth}
        hideYAxisText
        xAxisColor={Colors.dark.border}
        yAxisColor={Colors.dark.border}
        animateOnDataChange
        animationDuration={600}
        onDataChangeAnimationDuration={300}
        maxValue={400}
        noOfSections={8}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    overflow:'hidden'
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Size.heightPixel(24),
    paddingHorizontal: Size.widthPixel(16),
  },
  label: {
    fontSize: Size.fontPixel(16),
    color: Colors.dark.textSubtle,
    marginBottom: Size.heightPixel(4),
  },
  amount: {
    fontSize: Size.fontPixel(32),
    fontWeight: "bold",
    color: Colors.dark.text,
  },
}); 