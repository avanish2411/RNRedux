// Task
// define initial state
// define reducer name and actions
// export actions(use with dispatch) and reducers(use in mystore)

import { createSlice,PayloadAction } from "@reduxjs/toolkit"
interface User {
    name:String,
    email:String,
    contact:number
}

interface UserState {
    users: User[];
    theme: "light" | "dark";
}

const initialState: UserState = {
    users: [],
    theme: "light"
};
  
const UserSlice = createSlice({
    name: "users", //name of the slice
    initialState,
    reducers: {
        addUser: (state, action) => {
            //state.users =[]
            //to add something in state we will use state.users.push()
            //action constains payload(it have data that we'll send) and type(not our concered)
            //action.payload{name,email,mobile,etc}
            state.users.push(action.payload);
        },
        updateUsers: (state, action: PayloadAction<{ index: number; data: User }>) => {
            //agr id milti ko index find kro or phir use index ko chnage
            //or esme hamko direct index mil rhi
            state.users[action.payload.index] = action.payload.data;
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.users.splice(action.payload, 1);
            //esme payload me index bhej rhe hai or ek delete krna hai to 1 likhe hai 
            //slice remove element from array and if necessary insert element at that position and returns deleted elements
        },
        changeTheme: (state, action: PayloadAction<"light" | "dark">) => {
            state.theme = action.payload;
        }
    } // it is an object that have combination of actions
})

export const { addUser, updateUsers, deleteUser, changeTheme } = UserSlice.actions;
export default UserSlice.reducer;