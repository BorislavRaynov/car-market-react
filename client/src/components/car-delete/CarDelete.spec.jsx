import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from 'react-router-dom';

import CarDelete from "./CarDelete";

it('Should have logout button when logout displays', () => {
    render(<BrowserRouter><CarDelete /></BrowserRouter>);

    const deleteBtn = screen.getByText('Delete');

    expect(deleteBtn).toBeVisible(deleteBtn);
});

it('Should have cancel button when logout displays', () => {
    render(<BrowserRouter><CarDelete /></BrowserRouter>);

    const cancelBtn = screen.getByText('Cancel');

    expect(cancelBtn).toBeVisible(cancelBtn);
});