import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React from 'react';

const Loading = ({text}) => {
  return (
    <SafeAreaView style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="0000ff" />
      <Text>{text}....</Text>
    </SafeAreaView>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
});
