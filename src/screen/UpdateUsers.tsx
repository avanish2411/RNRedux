import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUsers } from '../redux/slice/UserSlice';
import { useRoute } from '@react-navigation/native';

const UpdateUsers: React.FC = () => {
  const route = useRoute<{ key: string; name: string; params: { item: { name: string; email: string; contact: string }; index: number } }>();
  const { item, index } = route.params;
  const [name, setName] = useState(item?.name || '');
  const [email, setEmail] = useState(item?.email || '');
  const [contact, setContact] = useState(item?.contact || '');
  const dispatch = useDispatch();

  const handleSave = () => {
    if (name.trim() && email.trim() && !isNaN(Number(contact))) {
      dispatch(updateUsers({ index, data: { name, email, contact: Number(contact) } }));
      setName('');
      setEmail('');
      setContact('');
    }
  };

  return (
    <KeyboardAvoidingView style={{ backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 15 }}>
      <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="Enter User Name" />
      <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="Enter Email" />
      <TextInput value={contact} onChangeText={setContact} keyboardType="number-pad" style={styles.input} placeholder="Enter Contact" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Cancel</Text></TouchableOpacity>
        <TouchableOpacity onPress={handleSave} style={styles.button}><Text style={styles.buttonText}>Save</Text></TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 14,
    marginVertical: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default UpdateUsers;
