import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios'

const initialState: QrLoaderDefinedType = {
    qrLoader: false,
    qrsUrl: ''
}

export const QrLoaderSlice = createSlice({
    name: "QrLoader",
    initialState,
    reducers: {
        setQrLoader: (state, action) => {
            return {
                ...state,
                qrLoader: action.payload
            }
        },
        setQR: (state, action) => {
            return {
                ...state,
                qrsUrl: action.payload
            }
        }
    }
})

export const generateQRPromise = (inputValue: string) => (dispatch: any) => {
    dispatch(setQrLoader(true))
    let size = "500x500";
    let apiUrl = "https://api.qrserver.com/v1/create-qr-code/";

        axios.get(`${apiUrl}?data=${inputValue}&size=${size}`)
            .then((res) => {
                dispatch(setQR(res.config.url))
                dispatch(setQrLoader(false))
            })

}

export const {setQrLoader, setQR} = QrLoaderSlice.actions
export default QrLoaderSlice.reducer