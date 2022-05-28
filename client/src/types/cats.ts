export interface oneCat {
    id: string;
    url: string;
}

export enum CatsActionTypes {
    FETCH_CATS = "FETCH_USER",
    FETCH_CATS_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_CATS_ERROR = "FETCH_USER_ERROR",
    LIKE_CAT = "LIKE_CAT",
    DEL_CAT_FROM_FAVS = "DEL_CAT_FROM_FAVS"
}

export interface CatsState {
    favouriteCats: {};
    cats: oneCat[];
    loading: boolean;
    error: null | string;
    page: number;
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
    type: CatsActionTypes.LIKE_CAT;
    payload: oneCat;
}

interface DelCatAction {
    type: CatsActionTypes.DEL_CAT_FROM_FAVS;
    payload: string;
}

export type CatsAction = FetchCatsAction | FetchCatsSuccessAction | FetchCatsErrorAction | LikeCatAction | DelCatAction;