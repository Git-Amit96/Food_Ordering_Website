import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// ? describe() is used to group multiple test cases.

describe("Test Cases for Contact Us Page", () => {
    test("Contact page loaded or not", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    // * We can use both "it" and "test" as both of them are same
    it("Input box loaded or not", () => {
        render(<Contact />);

        // ! getAllByRole() is used when there is multiple items to be tested.
        // ! getByRole() just test only one item.

        const textbox = screen.getAllByRole("textbox");
        console.log(textbox.length);
        expect(textbox.length).toBe(2);
    })
})


