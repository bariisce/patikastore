import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, TextInput, Dimensions } from "react-native";
import prdoucts from './products.json';
import Card from "./src/components/Card/Card";

function App() {
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.app_title}>PATİSTORE</Text>
      <TextInput onChangeText={(value) => {
        console.warn({value}, 'yazıldı');
      }} style={styles.text_input} placeholder="Search"/>
      <FlatList numColumns={2} data={prdoucts} renderItem={({item}) => <Card product={item}/>} keyExtractor={keyExtractor}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    backgroundColor: 'grey', 
    alignItems: 'center',
  },
  app_title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
},
  text_input: {
      width: Dimensions.get('window').width - 30,
      height: Dimensions.get('window').height / 15,
      margin: 10,
      fontSize: 20,
      color: 'black',
      borderWidth: 2,
      borderColor: 'grey',
      borderRadius: 10,
      marginBottom: 16,
      backgroundColor: 'white',
  }
});

export default App;