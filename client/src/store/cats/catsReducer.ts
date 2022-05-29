import { CatsAction, CatsState, CatsActionTypes } from './../../types/cats';

const initialState: CatsState = {
    cats: [],
    loading: false,
    error: null,
    page: 0
}

export const catsReducer = (state = initialState, action: CatsAction): CatsState => {
    switch (action.type) {
        case CatsActionTypes.FETCH_CATS:
            return {
                ...state,
                loading: true,
                error: null
            }
        case CatsActionTypes.FETCH_CATS_SUCCESS:
            return {
                ...state,
                page: action.payload.page,
                loading: false,
                error: null,
                cats: [...state.cats, ...action.payload.cats]
            }
        case CatsActionTypes.FETCH_CATS_ERROR:
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        default:
            return state;
    }
}