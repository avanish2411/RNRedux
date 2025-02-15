import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddUsers from '../screen/AddUsers';
import Cross from 'react-native-vector-icons/Entypo'
import Edit from 'react-native-vector-icons/MaterialIcons'
import { deleteUser } from '../redux/slice/UserSlice';
import { useNavigation } from '@react-navigation/native';

interface User {
  name: string;
  email: string;
  contact: number;
}

interface UserState {
  users: User[];
  theme: 'light' | 'dark';
}

const Users = () => {
  const users = useSelector((state: { users: UserState }) => state.users);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const handleOpenModal = () => {
    setModalVisible(true); // Open modal
  };

  console.log(users);

  return (
    <View style={{ flex: 1 }}>
      {Array.isArray(users) && users.length > 0 ? (
        <FlatList
          data={users}
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={{ flexDirection: 'row', width: '90%', height: 'auto', borderWidth: 1, alignSelf: 'center', marginTop: 10, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 16 }}>
                <View style={{ marginRight: 'auto' }}>
                  <Text>{item.name}</Text>
                  <Text>{item.email}</Text>
                  <Text>{item.contact}</Text>
                </View>
                <View>
                  <Edit name='edit' size={24} color={'red'} style={{ marginBottom: 6 }} onPress={()=>navigation.navigate('UpdateUsers'as any, { index, item })} />
                  <Cross name='cross' size={24} color={'red'} onPress={() => dispatch(deleteUser(index))} />
                </View>
              </View>
            );
          }}
        />
      ) : (
        <Text style={{ flex: 1, textAlign: 'center', textAlignVertical: 'center' }}>
          No data
        </Text>
      )}

      <TouchableOpacity
        onPress={handleOpenModal}
        style={{
          width: 60,
          height: 60,
          position: 'absolute',
          bottom: 50,
          right: 20,
          backgroundColor: 'purple',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 50, textAlign: 'center', bottom: 3 }}>+</Text>
      </TouchableOpacity>
      <AddUsers modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default Users;
