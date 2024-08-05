import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from 'react-router-dom';
import Login from "./Login";

it('Should have email input when login displays', () => {
    render(<BrowserRouter><Login /></BrowserRouter>);

    const emailInput = screen.getByPlaceholderText('test@gmail.com');

    expect(emailInput).toBeVisible(emailInput);
});

it('Should have password input when login displays', () => {
    render(<BrowserRouter><Login /></BrowserRouter>);

    const passInput = screen.getByPlaceholderText('******');

    expect(passInput).toBeVisible(passInput);
});