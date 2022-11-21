import React from "react";
import { Carousel } from "antd";
import Box from "@mui/material/Box";
import { SLIDER_IMAGES, DEFAULT_IMAGES } from "../../common/constants";
import { ImgStyle } from "./styles"

export const Slider: React.FC = () => {
  const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) =>
    ((e.target as HTMLImageElement).src = DEFAULT_IMAGES);

  return (
    <Box component="div" data-testid="swiper-element">
      <Carousel autoplay effect="fade">
        {SLIDER_IMAGES.map((step) => (
          <Box
            component="img"
            key={step.label}
            sx={ImgStyle}
            src={step.imgPath ? step.imgPath : DEFAULT_IMAGES}
            alt={step.label}
            onError={onImageError}
          />
        ))}
      </Carousel>
    </Box>
  );
}
