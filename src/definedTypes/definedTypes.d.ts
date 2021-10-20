declare interface STORE_TYPE {
    main: RegDefinedTypes
    cocktail: CocktailDefinedType
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