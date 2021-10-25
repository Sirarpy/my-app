import {createSlice} from "@reduxjs/toolkit";

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
    return new Promise((resolve, reject) => {
        dispatch(setQrLoader(true))

        let size = "500x500";
        let dataValue = inputValue;
        let apiUrl = "https://api.qrserver.com/v1/create-qr-code/";

        if (dataValue && dataValue !== "") {
            resolve(dispatch(setQR(`${apiUrl}?data=${dataValue}&size=${size}`)))
        } else {
            reject(Error("Fill all Inputs!"))
        }
        dispatch(setQrLoader(false))

    })

}

export const {setQrLoader, setQR} = QrLoaderSlice.actions
export default QrLoaderSlice.reducer