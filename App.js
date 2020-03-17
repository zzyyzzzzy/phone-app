import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './component/Header';
import {uuid} from 'uuidv4';

const App = () => {
  const [item, setItem] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Coke'},
    {id: 4, text: 'Juice'},
  ]);
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
