import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from 'react-router-dom';

import Page404 from "./Page404"

it('Should display Page not found', () => {
    render(<BrowserRouter><Page404 /></BrowserRouter>);

    const notFound = screen.getByText('Page not found');

    expect(notFound).toBeVisible(notFound);
});