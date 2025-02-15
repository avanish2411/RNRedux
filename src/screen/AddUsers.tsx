import { View, Text, Modal, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slice/UserSlice';

interface AddModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const AddUsers: React.FC<AddModalProps> = ({ modalVisible, setModalVisible }) => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [contact, setContact] = useState<string>("")
  const dispatch = useDispatch();

  const sendData = (name: string, email: string, contact: string) => {
    if (name.trim() && email.trim() && contact.trim()) {
      const contactNumber = Number(contact);
      // console.log({ name, email, contact: contactNumber });
      if (!isNaN(contactNumber)) {
        dispatch(addUser({ name, email, contact: contactNumber }));
        setModalVisible(false);
        setName("");
        setContact("");
        setEmail("");
      }
    }
  };

  return (
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
        </TouchableWithoutFeedback>

        <KeyboardAvoidingView
          style={{
            height: '50%',
            backgroundColor: 'white',
            marginTop: 'auto',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 15,
          }}
        >
          <Text style={{ marginHorizontal: 'auto', fontSize: 24, marginVertical: 8, fontWeight: 'condensed' }}>Enter User Details</Text>
          <TextInput value={name} onChangeText={setName} style={{ width: '100%', height: 50, borderWidth: 1, borderRadius: 14, marginHorizontal: 'auto', paddingLeft: 10, alignSelf: 'center', marginVertical: 10 }} placeholder='Enter User Name' />
          <TextInput value={email} onChangeText={setEmail} style={{ width: '100%', height: 50, borderWidth: 1, borderRadius: 14, marginHorizontal: 'auto', paddingLeft: 10, alignSelf: 'center', marginVertical: 10 }} placeholder='Enter Email Name' />
          <TextInput value={contact} onChangeText={setContact} keyboardType='number-pad' style={{ width: '100%', height: 50, borderWidth: 1, borderRadius: 14, marginHorizontal: 'auto', paddingLeft: 10, alignSelf: 'center', marginVertical: 10 }} placeholder='Enter Contact Name' />
          <View style={{ margin: 'auto', width: '100%', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ paddingHorizontal: 40, paddingVertical: 10, marginHorizontal: 'auto', borderRadius: 12, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', width: '45%' }}><Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Cancel</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => sendData(name, email, contact)} style={{ paddingHorizontal: 40, paddingVertical: 10, marginHorizontal: 'auto', borderRadius: 12, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', width: '45%' }}><Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Save</Text></TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

      </Modal>
    );
  };

  export default AddUsers;
