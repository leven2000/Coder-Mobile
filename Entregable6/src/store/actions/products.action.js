import { productsTypes } from "../types";

const {select_product, filtered_products} = productsTypes;

export const selectproduct = (id) =>({
    type: select_product,
    productId: id
});

export const filteredproducts = (id) => ({
    type: filtered_products,
    categoryId: id
});
