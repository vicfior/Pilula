import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './router';
import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

const App = () => {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  } else {
    return (
      <View style={styles.container}>
        <Routes />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf4',
  },
});

export default App;