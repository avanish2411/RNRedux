import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddUsers from '../screen/AddUsers';
import Cross from 'react-native-vector-icons/Entypo';
import Edit from 'react-native-vector-icons/MaterialIcons';
import { deleteUser } from '../redux/slice/UserSlice';

interface User {
  name: string;
  email: string;
  contact: number;
}
interface UserState {
  users: User[];
  theme: 'light' | 'dark';
}


type RootStackParamList = {
  Users: undefined;
  UpdateUsers: { index: number; item: User };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Users'>;

const Users = () => {
  const users = useSelector((state: { users: UserState }) => state.users.users);
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);

  return (
    <View style={{ flex: 1 }}>
      {Array.isArray(users) && users.length > 0 ? (
        <FlatList
          data={users}
          renderItem={({ item, index }) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                width: '90%',
                borderWidth: 1,
                backgroundColor: 'white',
                alignSelf: 'center',
                marginTop: 10,
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 16,
              }}
            >
              <View style={{ marginRight: 'auto' }}>
                <Text style={{ fontSize: 16, color: '#333', marginBottom: 4 }}>{item.name}</Text>
                <Text style={{ fontSize: 16, color: '#333', marginBottom: 4 }}>{item.email}</Text>
                <Text style={{ fontSize: 16, color: '#333', marginBottom: 4 }}>{item.contact}</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Edit
                  name="edit"
                  size={24}
                  color={'#E74C3C'}
                  style={{ marginBottom: 'auto' }}
                  onPress={() => navigation.navigate('UpdateUsers', { index, item })}
                />
                <Cross
                  name="cross"
                  size={24}
                  color={'#E74C3C'}
                  onPress={() => dispatch(deleteUser(index))}
                />
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={{ flex: 1, textAlign: 'center', textAlignVertical: 'center' }}>
          No data
        </Text>
      )}

      <TouchableOpacity
        onPress={handleOpenModal}
        style={{ width: 60, height: 60, position: 'absolute', bottom: 50, right: 20, backgroundColor: 'purple', borderRadius: 30, justifyContent: 'center', alignItems: 'center', }}>
        <Text style={{ color: 'white', fontSize: 50, textAlign: 'center', bottom: 3 }}>+</Text>
      </TouchableOpacity>
      <AddUsers modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default Users;
