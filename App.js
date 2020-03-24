import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItem] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Coke'},
    {id: 4, text: 'Juice'},
  ]);

  const deleteItem = id => {
    setItem(prevItem => {
      return prevItem.filter(item => item.id !== id);
    });
  };
  const addItem = itemText => {
    setItem(prevItem => {
      return [...prevItem, {id: prevItem.length + 1, text: itemText}];
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
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
