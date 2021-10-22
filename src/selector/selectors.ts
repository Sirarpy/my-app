import {createSelector} from 'reselect'

const MainState = (state: STORE_TYPE) => state.main;
const CocktailState = (state: STORE_TYPE) => state.cocktail
const QrLoaderState = (state: STORE_TYPE) => state.loader

export const getUUID = createSelector(MainState, (state) => state.uuid)
export const getLoader = createSelector(MainState, (state) => state.loading)
export const getUsers = createSelector(MainState, (state) => state.users)
export const getLoginUser = createSelector(MainState, (state) => state.isLogined)

export const getPlay = createSelector(CocktailState, (state) => state.play)
export const getShake = createSelector(CocktailState, (state) => state.shake)
export const getDrinks = createSelector(CocktailState, (state) => state.drinks)

export const getQrLoader = createSelector(QrLoaderState, (state) => state.qrLoader)
export const getQrUrl = createSelector(QrLoaderState, (state) => state.qrsUrl)