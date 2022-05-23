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

 import React, {PropsWithChildren} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 const Section: React.FC<
   PropsWithChildren<{
     title: string;
   }>
 > = ({children, title}) => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? '#FFF' : '#000',
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? '#DAE1E7' : '#444',
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? '#222' : '#F3F3F3',
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         This doesn't work on Expo
         <View
           style={{
             backgroundColor: isDarkMode ? '#000' : '#FFF',
           }}>
           <Section title="Step One">
             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
             screen and then come back to see your edits.
           </Section>
           <Section title="See Your Changes">This doesn't work on Expo</Section>
           <Section title="Debug">This doesn't work on Expo</Section>
           <Section title="Learn More">
             Read the docs to discover what to do next:
           </Section>
           This doesn't work on Expo
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 