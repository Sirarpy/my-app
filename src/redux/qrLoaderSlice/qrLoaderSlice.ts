import {createSlice} from "@reduxjs/toolkit";

const initialState: QrLoaderDefinedType = {
    qrLoader: false
}

export  const QrLoaderSlice = createSlice({
    name: "QrLoader",
    initialState,
    reducers:{
        setQrLoader:(state, action)=>{
            return{
                ...state,
                qrLoader:action.payload
            }
        }
    }
})



export const {setQrLoader} = QrLoaderSlice.actions
export default QrLoaderSlice.reducer