import { useContext, useState, createContext } from "react";
import { useGetApi } from "../Hooks/useGetApi";
import { CategoryListContextType, CategoryListProps, ChildrenProps } from "../TscTypes/TscTypes";

const CategoryList = createContext<CategoryListContextType | null>(null);

export const useCategoryList = () => {
    const contextValue = useContext(CategoryList);
    if (!contextValue) {
        throw new Error("CategoryList context must be used inside CategoryList provider");
    }

    return contextValue;
};

export const CategoryListProvider: React.FC<ChildrenProps> = (props) => {
    const [list, loading] = useGetApi("/feeds/category");
    // const [list, setList] = useState({ news: true, president: true, pib: true, prs: true });
    const value = { list, loading } as CategoryListContextType;

    return <CategoryList.Provider value={value}>{props.children}</CategoryList.Provider>;
};
