/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import { StatusBar } from 'expo-status-bar';
 import {
   SafeAreaView
 } from 'react-native';
 import CalcWrapper from "./Calculatrice/CalcWrapper/CalcWrapper";
 import { styles } from './Calculatrice/calculatrice_style';
 
 const App = () => {
   return (
     <SafeAreaView style={styles.app}>
      <StatusBar style="auto" />
       <CalcWrapper/>
     </SafeAreaView>
   );
 };
 
 
 
 export default App;
 