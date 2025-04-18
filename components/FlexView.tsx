import React from 'react';
import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';

interface FlexViewProps extends ViewProps {
  style?: ViewStyle;
}

const FlexView = ({children, style, ...props}: FlexViewProps) => {
  return (
    <View style={[styles.container,style]} {...props}>
      {children}
    </View>
  );
};

export default FlexView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
