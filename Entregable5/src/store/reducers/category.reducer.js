import {categories} from '../../constants/data/index'
import { categoryTypes } from '../types';

const {select_category} = categoryTypes
const initialState = {
    categories: categories,
    selected: null
}

const categoryReducer = ( state = initialState, action ) =>{
    switch (action.type) {
        case select_category:
            const indexCategory = state.categories.findIndex(
                (category) => category.id == action.categoryId
            );
            if (indexCategory == -1) return state;
            return {
                ...state,
                selected: state.categories[indexCategory]
            }
        default:
            return state
    }
};

export default categoryReducer;