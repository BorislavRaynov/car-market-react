import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from 'react-router-dom';

import CarAdCreate from "./CarAdCreate";

it('Should have save button when AddForm displays', () => {
    render(<BrowserRouter><CarAdCreate /></BrowserRouter>);

    const saveBtn = screen.getByText('Save');

    expect(saveBtn).toBeVisible(saveBtn);
});

it('Should have cancel button when AddForm displays', () => {
    render(<BrowserRouter><CarAdCreate /></BrowserRouter>);

    const cancelBtn = screen.getByText('Cancel');

    expect(cancelBtn).toBeVisible(cancelBtn);
});