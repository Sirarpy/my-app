declare interface STORE_TYPE {
    main: RegDefinedTypes
    cocktail: CocktailDefinedType
    loader: QrLoaderDefinedType
}

declare interface RegDefinedTypes {
    email: string
    uuid: string
    loading: boolean
    isLogined: boolean
    users: any
}

declare interface CocktailDefinedType {
    play: boolean
    drinks: {}
    shake: boolean

}

declare interface QrLoaderDefinedType {
    qrLoader: boolean
}

declare module '*.mp3' {
    const src: string;
    export default src;
}