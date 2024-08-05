import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from 'react-router-dom';

import CarList from "./CarList";

it('Should have Latest adds', () => {
    render(<BrowserRouter><CarList /></BrowserRouter>);

    const ltsAds = screen.getByText('Latest adds');

    expect(ltsAds).toBeVisible(ltsAds);
});