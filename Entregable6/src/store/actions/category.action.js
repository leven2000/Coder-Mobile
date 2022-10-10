import { categoryTypes } from "../types";

const {select_category} = categoryTypes;


export const selectedCategory = (id ) => ({
    type: select_category,
    categoryId: id
});

