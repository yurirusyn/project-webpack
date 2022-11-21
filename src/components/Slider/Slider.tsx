import React from "react";
import { Carousel } from "antd";
import Box from "@mui/material/Box";
import { SLIDER_IMAGES, DEFAULT_IMAGES } from "../../common/constants";

export default function Slider() {
  const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) =>
    ((e.target as HTMLImageElement).src = DEFAULT_IMAGES);

  return (
    <div data-testid="swiper-element">
      <Carousel autoplay>
        {SLIDER_IMAGES.map((step) => (
          <Box
            component="img"
            key={step.label}
            sx={{
              height: 400,
              width: "100%",
              display: "block",
              overflow: "hidden",
              borderRadius: "16px",
            }}
            src={step.imgPath ? step.imgPath : DEFAULT_IMAGES}
            alt={step.label}
            onError={onImageError}
          />
        ))}
      </Carousel>
    </div>
  );
}
