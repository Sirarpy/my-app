import {createSelector} from 'reselect'

const MainState = (state: STORE_TYPE) => state.main;
const CocktailSate = (state: STORE_TYPE) => state.cocktail

export const getUUID = createSelector(MainState, (state) => state.uuid)
export const getLoader = createSelector(MainState, (state) => state.loading)
export const getUsers = createSelector(MainState, (state) => state.users)
export const getLoginUser = createSelector(MainState, (state) => state.isLogined)

export const getPlay = createSelector(CocktailSate, (state) => state.play)
export const getShake = createSelector(CocktailSate, (state) => state.shake)
export const getDrinks = createSelector(CocktailSate, (state) => state.drinks)
