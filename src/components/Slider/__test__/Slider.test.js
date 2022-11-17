import React from "react";
import { render, waitFor } from "@testing-library/react";
import Slider from "../Slider";
import { SLIDER_IMAGES } from "../../../common/constants";

const renderComponent = async () => {
  let result;

  await waitFor(async () => {
    result = render(<Slider />);
  });

  return result;
};

describe("Slider component", () => {
  it("Should render slider image properly", async () => {
    const { getByRole } = await renderComponent();
    const sliderImg = getByRole("img");
    expect(sliderImg.src).toBe(SLIDER_IMAGES[0].imgPath);
  });

  it("Should render all slider steps", async () => {
    const { container } = await renderComponent();
    const sliderStep = container.getElementsByClassName("MuiMobileStepper-dot");
    expect(sliderStep.length).toBe(SLIDER_IMAGES.length);
  });
});
