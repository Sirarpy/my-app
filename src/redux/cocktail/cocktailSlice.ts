import {createSlice} from '@reduxjs/toolkit';
import axios from "axios";


const initialState: CocktailDefinedType = {
    play: false,
    drinks: {},
    shake: false
}


export const CocktailSlice = createSlice({
    name: 'cocktail',
    initialState,
    reducers: {
        setSound: (state, action) => {
            return {
                ...state,
                play: action.payload
            }
        },
        setShake: (state, action) => {
            return {
                ...state,
                shake: action.payload
            }
        },
        setDrinks: (state, action) => {
            return {
                ...state,
                drinks: action.payload
            }
        }
    }
})

export const fetchData = (url: string) => (dispatch: any) => {
    dispatch(setShake(true))
    dispatch(setSound(true))
    axios.get(url)
        .then((response:any) => {
            if (response.status === 200 && Array.isArray(response.data.drinks)) {
                dispatch(setDrinks(response.data.drinks[0]))
            }
        })
    setTimeout(() => {
        dispatch(setSound(false))
        dispatch(setShake(false))
    }, 3000)

}

export const {setSound, setDrinks, setShake} = CocktailSlice.actions
export default CocktailSlice.reducer