import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const AddItem = props => {
  return (
    <View>
      <TextInput placeholder="Add Item..." style={styles.input} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>
          {' '}
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddItem;
