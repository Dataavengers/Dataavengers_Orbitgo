import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../urlConfig";



const initialState = {
    loading: false,
    user: {
        name:'',
        email:'',
        phoneNo:'',
        _id:''
    },
    userList: [ { name:'', email:'', phoneNo:'', _id:'' } ],
    error: false
};

export const getUsers = createAsyncThunk("user/get", async () => {
    const res = await axios.get(`${BaseUrl}/user/get`);
    return res.data.userList;
});

export const addUser = createAsyncThunk("user/add", async (user) => {
    const res = await axios.post(`${BaseUrl}/user/add`, {user});
    return res.data;
});

export const editUser = createAsyncThunk("user/edit", async (user) => {
    await axios.post(`${BaseUrl}/user/edit/${user._id}`, user);
    return await user;
});

export const deleteUser = createAsyncThunk("user/delete", async (user) => {
    await axios.delete(`${BaseUrl}/user/delete/${user._id}`);
    return user._id;
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, state => {
            state.loading = true;
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.userList = action.payload;
        });
        builder.addCase(getUsers.rejected, state => {
            state.loading = false;
            state.error = true;
        });
        

        builder.addCase(addUser.pending, state => {
            state.loading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.loading = false;
            state.userList.push(action.payload);
        });
        builder.addCase(addUser.rejected, state => {
            state.loading = false;
            state.error = true;
        });


        builder.addCase(editUser.pending, state => {
            state.loading = true;
        });
        builder.addCase(editUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            let userindex = state.userList.findIndex(user => user._id === payload._id);
            // const newUserList = state.userList;
            // newUserList[userindex] = payload;
            state.userList[userindex] = payload;
        });
        builder.addCase(editUser.rejected, state => {
            state.loading = false;
            state.error = true;
        });


        builder.addCase(deleteUser.pending, state => {
            state.loading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            const newUserList = state.userList.filter(user => {return user._id !== payload }); // change to ===> _id
            state.userList =  newUserList;
        });
        builder.addCase(deleteUser.rejected, state => {
            state.loading = false;
            state.error = true;
        });
    }
});

// export const {  } = userSlice.actions;
export default userSlice.reducer;