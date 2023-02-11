import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Login from "../Login";
import { rest } from "msw";
import { server } from "../../Mocks/server";
import { CategoryListProvider } from "../../Contexts/CategoryList";
import { ChildrenProps } from "../../TscTypes/TscTypes";
import { AuthProvider } from "../../Contexts/Auth";

test("button enabling and disabling based on textfield", async () => {
    render(<Login />, { wrapper: BrowserRouter });
    const user = userEvent.setup({ document });
    const emailTextField = screen.getByLabelText(/email address/i);
    const passwordTextField = screen.getByLabelText(/password/i);
    const LoginBtn = screen.getByRole("button", { name: "Login" });

    await user.type(emailTextField, "hello");
    await user.type(passwordTextField, "12345");
    expect(LoginBtn).not.toBeDisabled();
});

const DrawerProvider: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <CategoryListProvider>{children}</CategoryListProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

test("Alert message appears on failure", async () => {
    server.resetHandlers(
        rest.post("http://localhost:8090/login", (req, res, ctx) => {
            return res(
                ctx.status(500),
                ctx.json({
                    data: "Error: Email id is not valid",
                })
            );
        })
    );

    render(<Login />, { wrapper: DrawerProvider });
    const user = userEvent.setup();

    const emailTextField = screen.getByLabelText(/email address/i);
    const passwordTextField = screen.getByLabelText(/password/i);
    const LoginBtn = screen.getByRole("button", { name: "Login" });

    await user.type(emailTextField, "hello");
    await user.type(passwordTextField, "12345");
    await userEvent.click(LoginBtn);

    const alertEl = await screen.findByRole("alert");

    expect(alertEl).toBeInTheDocument();
});
