import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from 'react-router-dom';

import Logout from "./Logout";

it('Should logout button when logout displays', () => {
    render(<BrowserRouter><Logout /></BrowserRouter>);

    const logoutBtn = screen.getByText('Logout');

    expect(logoutBtn).toBeVisible(logoutBtn);
});

it('Should cancel button when logout displays', () => {
    render(<BrowserRouter><Logout /></BrowserRouter>);

    const cancelBtn = screen.getByText('Cancel');

    expect(cancelBtn).toBeVisible(cancelBtn);
});