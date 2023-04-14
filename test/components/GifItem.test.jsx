/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GitItem/>", () => {
    const title = "saitama";
    const url = "https://one-punch.com/saitama.jpg";

    test("Debe hacer match con el snapshot", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
});
