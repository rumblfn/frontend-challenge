import { Dispatch } from 'redux';
import { CatsAction } from '../../types/cats';
import { CatsActionTypes } from '../../types/cats';
import { oneCat } from '../../types/cats';

import axios from 'axios';


export const fetchCats = (page: number, limit: number) => {
    return async (dispatch: Dispatch<CatsAction>) => {
        try {
            dispatch({
                type: CatsActionTypes.FETCH_CATS
            })
            axios.defaults.headers.common['x-api-key'] = "274348f7-004b-4311-baf7-e4e1d4b48afc"
            let response = await axios.get<oneCat[]>('https://api.thecatapi.com/v1/images/search', 
                { params: { page, limit, size: "small" } }
            )

            dispatch({
                type: CatsActionTypes.FETCH_CATS_SUCCESS, 
                payload: {
                    page: page + 1,
                    cats: [...response.data]
                }
            })
        } catch (e) {
            dispatch({
                type: CatsActionTypes.FETCH_CATS_ERROR, 
                payload: 'error'
            })
        }
    }
}

export const likeCat = (catId: string, catUrl: string) => {
    return async (dispatch: Dispatch<CatsAction>) => {
        try {
            dispatch({
                type: CatsActionTypes.LIKE_CAT,
                payload: {
                    id: catId,
                    url: catUrl
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const delCatFromFavs = (catId: string) => {
    return async (dispatch: Dispatch<CatsAction>) => {
        try {
            dispatch({
                type: CatsActionTypes.DEL_CAT_FROM_FAVS,
                payload: catId
            })
        } catch (e) {
            console.log(e)
        }
    }
}