import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from 'react-router-dom';

import Register from "./Register";

it('Should have email input when register displays', () => {
    render(<BrowserRouter><Register /></BrowserRouter>);

    const emailInput = screen.getByPlaceholderText('test@gmail.com');

    expect(emailInput).toBeVisible(emailInput);
});

it('Should have password and repeatpassword inputs when register displays', () => {
    render(<BrowserRouter><Register /></BrowserRouter>);

    const passInputs = screen.getAllByPlaceholderText('******');
    const inputCount = passInputs.length === 2;
    expect(inputCount).toBeTruthy();
});