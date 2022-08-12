import { createContext, useState , useEffect } from "react";

import {  getCategoriesAndDocuments } from "../utils/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap : {}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap , setCatergoriesMap] = useState({});

    // useEffect( ()=> {
    //     addCollectionAndDocuments('categories' , SHOP_DATA);
    // } , [] )

    useEffect( () => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments('categories');
            setCatergoriesMap(categoriesMap);
        }
        getCategoriesMap()
    } , [] )

    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
    )
}

