import {products} from '../../constants/data/index'
import { productsTypes } from '../types';

const {select_product, filtered_products} = productsTypes;

const initialState = {
    products: products,
    filteredProducts : [],
    selected: null,

}

const productReducer = ( state = initialState, action ) =>{
    switch(action.type){
        case select_product:
            return{
                ...state,
                selected: state.products.find(
                    (product) => product.id == action.productId
                )
            }
        case filtered_products:
            return{
                ...state,
                filteredProducts: state.products.filter(
                    (product) => product.categoryId == action.categoryId
                )
            }
        default: 
            return state;
    }
};

export default productReducer;