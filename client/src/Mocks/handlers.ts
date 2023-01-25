// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
    rest.post("http://localhost:8090/login", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ message: "User verified", user: "user data", token: "abc" }));
    }),
];
