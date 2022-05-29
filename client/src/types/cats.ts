export interface oneCat {
    id: string;
    url: string;
}

export enum CatsActionTypes {
    FETCH_CATS = "FETCH_USER",
    FETCH_CATS_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_CATS_ERROR = "FETCH_USER_ERROR",
}

export enum FavCatsActionTypes {
    LIKE_CAT = "LIKE_CAT",
    DEL_CAT_FROM_FAVS = "DEL_CAT_FROM_FAVS"
}

export interface CatsState {
    cats: oneCat[];
    loading: boolean;
    error: null | string;
    page: number;
}

export interface FavCatsState {
    favouriteCats: any;
}

interface FetchCatsAction {
    type: CatsActionTypes.FETCH_CATS;
}

interface FetchCatsSuccessAction {
    type: CatsActionTypes.FETCH_CATS_SUCCESS;
    payload: {
        page: number;
        cats: oneCat[];
    };
}

interface FetchCatsErrorAction {
    type: CatsActionTypes.FETCH_CATS_ERROR;
    payload: string;
}

interface LikeCatAction {
    type: FavCatsActionTypes.LIKE_CAT;
    payload: oneCat;
}

interface DelCatAction {
    type: FavCatsActionTypes.DEL_CAT_FROM_FAVS;
    payload: string;
}

export type CatsAction = FetchCatsAction | FetchCatsSuccessAction | FetchCatsErrorAction;
export type FavCatsAction = LikeCatAction | DelCatAction;