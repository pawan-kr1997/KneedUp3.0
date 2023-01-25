import "@testing-library/jest-dom";
import { server } from "./Mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
