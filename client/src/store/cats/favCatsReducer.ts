import { FavCatsAction, FavCatsState, FavCatsActionTypes } from "../../types/cats"

const initialState: FavCatsState = {
    favouriteCats: {}
}

export const favCatsReducer = (state = initialState, action: FavCatsAction): FavCatsState => {
    switch (action.type) {
        case FavCatsActionTypes.LIKE_CAT:
            return {
                favouriteCats: {
                    ...state.favouriteCats,
                    [action.payload.id]: action.payload.url
                }
            }
        case FavCatsActionTypes.DEL_CAT_FROM_FAVS:
            const fav_cats: any = {...state.favouriteCats}
            delete fav_cats[action.payload]
            return {
                favouriteCats: {
                    ...fav_cats
                }
            }
        default:
            return state;
    }
}