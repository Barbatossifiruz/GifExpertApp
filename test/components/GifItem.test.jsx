/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GitItem/>", () => {
    const title = "saitama";
    const url = "https://one-punch.com/saitama.jpg";

    test("Debe hacer match con el snapshot", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test.todo("debe de mostrar la imagen con el URL y el ALT indicado"),
        () => {
            render(<GifItem title={title} url={url} />);
            // screen.debug();
            // expect(screen.getByRole("img").src).toBe(url);
            // expect(screen.getByRole("img").alt).toBe(title + "!");
            const { src, alt } = screen.getByRole("img");
            expect(src).toBe(url);
            expect(alt).toBe(alt);
        };

    test.todo("debe de mostrar el titulo en el component"),
        () => {
            render(<GifItem title={title} url={url} />);
            expect(screen.getByText(title)).toBeTruthy();
        };
});
