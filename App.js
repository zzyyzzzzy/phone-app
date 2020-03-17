import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './component/Header';
import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItem] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Coke'},
    {id: 4, text: 'Juice'},
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
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
