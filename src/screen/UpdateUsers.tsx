import { View, Text } from 'react-native'
import React from 'react'
type UpdateUsersProps = {
  index:number,
  item:any
}

const UpdateUsers: React.FC<UpdateUsersProps> = ({ index, item }) => {
  return (
    <View>
      <Text>UpdateUsers</Text>
    </View>
  )
}

export default UpdateUsers