import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const userDataThunk = createAsyncThunk(
    '',
    async (arg,thunkAPI)=>{
        const response = await axios.get('',{
            'contentType':'json',
            'cors': '*'
        });
        const json = response.json;
        return json;
    }
)