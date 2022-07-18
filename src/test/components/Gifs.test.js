import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Gifs from "../../components/Gifs";

describe("Gifs Component", () => {
  test("renders content", async () => {
    const gifMock = {
      url: "https://i.giphy.com/media/hsucCfaAthO5m7f5AG/giphy.webp",
      title: "giftTest",
    };

    const component = render(<Gifs gif={gifMock} />);
    expect(component.container).toHaveTextContent(gifMock.title);
  });
});
