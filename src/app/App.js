import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './router';
import { 
  useFonts, 
  Nunito_400Regular, 
  Nunito_500Medium, 
  Nunito_800ExtraBold, 
  Nunito_600SemiBold,
  Nunito_700Bold
 } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

//contexts
import { RemedioProvider } from '../Contexts/RemedioContext';
import { AlarmeProvider } from '../Contexts/AlarmeContext';

const App = () => {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_800ExtraBold,
    Nunito_600SemiBold,
    Nunito_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  } else {
    return (
      <RemedioProvider>
        <AlarmeProvider>
          <View style={styles.container}>
            <Routes />
            <StatusBar style="auto" />
          </View>
        </AlarmeProvider>
      </RemedioProvider>
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