import {SET_LOADING, SET_DATA, SET_LOADED, ADD_MOVIE, DELETE_MOVIE} from './actions';
import { combineReducers } from 'redux';

function searchReducer(state=[], action) {
    switch (action.type) {

        case SET_DATA:
            return action.payload.moviesArray

        default:
            return state;
    }
}

function loadingReducer(state=false, action) {
    switch (action.type) {
        case SET_LOADING:
            return true;

         case SET_LOADED:   
            return false;
            
        default:
            return state;
    }
}

function favoritesReducer(state=[], action) {
    switch (action.type) {
        case ADD_MOVIE:
            return [...state, action.payload.movie]
            //return state.concat(action.payload.movie)

        case DELETE_MOVIE:
            return state.filter((favorite) => favorite.imdbID !== action.payload.imdbID)
            
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    loading: loadingReducer,
    results: searchReducer,
    favorites: favoritesReducer
})