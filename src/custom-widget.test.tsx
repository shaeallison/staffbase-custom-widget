import React from "react"
import {screen, render} from "@testing-library/react"

import {CustomWidget} from "./custom-widget";

describe("CustomWidget", () => {
    it("should render the component", () => {
        render(<CustomWidget contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
