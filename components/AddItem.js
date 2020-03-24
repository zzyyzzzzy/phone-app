import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const AddItem = props => {
  const [text, setText] = useState('');

  const onChange = textVal => setText(textVal);
  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => props.addItem(text)}>
        <Text style={styles.btnText}>
          {' '}
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {height: 60, padding: 8, fontSize: 16},
  btn: {backgroundColor: '#c2bad8', padding: 9, margin: 5},
  btnText: {textAlign: 'center', fontSize: 20},
});

export default AddItem;
