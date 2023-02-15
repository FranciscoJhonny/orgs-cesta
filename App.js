// import { SafeAreaView, StatusBar, View } from "react-native";
import React, { useEffect, useCallback } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from 'expo-splash-screen';

import Cesta from "./src/telas/Cesta";
import mock from "./src/mocks/cesta";

export default function App() {
  const [fontCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontCarregada) {
      await SplashScreen.hideAsync();
    }
  }, [fontCarregada]);

  if (!fontCarregada) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
