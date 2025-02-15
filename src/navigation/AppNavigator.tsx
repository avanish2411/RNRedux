import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Users from '../screen/Users'
import AddUsers from '../screen/AddUsers'
import UpdateUsers from '../screen/UpdateUsers'

type NativeStackProps =  {
    Users:undefined,
    AddUsers:undefined,
    UpdateUsers:undefined

}
const Stack = createNativeStackNavigator<NativeStackProps>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Users' component={Users} />
                <Stack.Screen name='UpdateUsers' component={UpdateUsers} />
            </Stack.Navigator>            
        </NavigationContainer>
    )
}

export default AppNavigator