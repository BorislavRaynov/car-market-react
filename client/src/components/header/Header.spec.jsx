import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from 'react-router-dom';

import Header from "./Header";

it('Should have login if not loged in', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);

    const login = screen.getByText('Log in');

    expect(login).toBeVisible(login);
});

it('Should have register if not loged in', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);

    const register = screen.getByText('Register');

    expect(register).toBeVisible(register);
});