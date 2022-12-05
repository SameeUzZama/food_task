import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

export const YourTest = ({ data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Box>
        <Typography variant="h5">Your taste</Typography>
        <Slider {...settings}>
          {data?.map((item, index) => {
            return (
              <Card
                key={index}
                sx={{
                  height: 250,
                  borderRadius: "20px",
                  border: "none",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item?.images[0].url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography>{item?.restaurant_name}</Typography>
                  <Typography>
                    {item?.location?.location_locality},{" "}
                    {item?.location?.city_name}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Slider>
      </Box>
      <div>
        <Slider {...setting}>
          {data?.map((item, index) => {
            return (
              <Card
                key={index}
                sx={{
                  height: 170,
                  borderRadius: "20px",
                  border: "none",
                  mt: 2,
                }}
              >
                <CardMedia
                  component="img"
                  height="170"
                  image={item?.images[0].url}
                  alt="green iguana"
                />
              </Card>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default YourTest;
