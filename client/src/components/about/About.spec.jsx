import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from 'react-router-dom';

import About from "./About";

it('Should have about header', () => {
    render(<BrowserRouter><About /></BrowserRouter>);

    const aboutHeader = screen.getByText('High availability');

    expect(aboutHeader).toBeVisible(aboutHeader);
});