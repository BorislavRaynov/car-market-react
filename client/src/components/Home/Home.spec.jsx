import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Home from "./Home";
import { BrowserRouter } from 'react-router-dom';

it('Should have heading', () => {
    render(<BrowserRouter><Home /></BrowserRouter>);

    const headingEl = screen.getByText('Welcome to Car Market');

    expect(headingEl).toBeVisible(headingEl);
});