import { useContext, useState, createContext } from "react";
import { CategoryListContextType, ChildrenProps } from "../TscTypes/TscTypes";

const CategoryList = createContext<CategoryListContextType | null>(null);

export const useCategoryList = () => {
    const contextValue = useContext(CategoryList);
    if (!contextValue) {
        throw new Error("CategoryList context must be used inside CategoryList provider");
    }

    return contextValue;
};

export const CategoryListProvider: React.FC<ChildrenProps> = (props) => {
    //Logic to get category list from api
    const [list, setList] = useState({ news: true, president: true, pib: true, prs: true });
    const value = { list };

    return <CategoryList.Provider value={value}>{props.children}</CategoryList.Provider>;
};
