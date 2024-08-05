import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from 'react-router-dom';

import Home from "./Home";

it('Should have heading', () => {
    render(<BrowserRouter><Home /></BrowserRouter>);

    const headingEl = screen.getByText('Welcome to Car Market');

    expect(headingEl).toBeVisible(headingEl);
});