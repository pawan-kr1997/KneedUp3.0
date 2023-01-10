import React from "react";
import { render, screen } from "@testing-library/react";
import { CategoryListProvider } from "../../Contexts/CategoryList";
import { ChildrenProps } from "../../TscTypes/TscTypes";
import Drawer from "../Drawer";
import { BrowserRouter } from "react-router-dom";

const DrawerProvider: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <BrowserRouter>
            <CategoryListProvider>{children}</CategoryListProvider>
        </BrowserRouter>
    );
};

test("Drawer items render", () => {
    render(<Drawer isDrawerOpen={true} onIsDrawerOpen={jest.fn()} />, { wrapper: DrawerProvider });
    const ListItems = screen.getAllByRole("list");
    expect(ListItems).toHaveLength(5);
});
