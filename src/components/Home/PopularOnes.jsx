import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router";

export const PopularOnes = ({ data }) => {
    const navigate = useNavigate();

    const handleClick=(item)=>{
        navigate('/detail', { state: { item: item } });
    }

  return (
    <>
    <Typography variant="h5">Popular Once</Typography>
      {data?.map((item, index) => {
        return (
          <Grid container key={index}>
            <Card className="shopnear" sx={{ display: "flex", alignItems:"center", paddingLeft: "20px", mt:1 }}>
              <Grid xs={4.5} className="shopnear-img-sec">
                <Stack className="shop-img-container">
                  <CardMedia
                    component="img"
                    image={item?.images[0].url}
                    alt="green iguana"
                    className="shop-img"
                    onClick={()=>handleClick(item)}
                  />
                </Stack>
              </Grid>
              <Grid xs={7}>
                <CardContent className="card-content1">
                  <Stack>
                    <Typography
                      className="category-title"
                      gutterBottom
                      variant="h6"
                      component="h4"
                    >
                      {item?.restaurant_name}
                    </Typography>
                    <Stack className="location-sec">
                      <Typography
                        className="address"
                        variant="body1"
                        id="description"
                      >
                        {item?.location?.location_locality},{" "}
                        {item?.location?.city_name}
                      </Typography>
                    </Stack>
                    <Box className="icons-sec">
                      <Typography
                        className="star-icon"
                        variant="body1"
                        id="description"
                      ></Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box>
                        <Typography><StarIcon/>{item?.rating?.restaurant_avg_rating}</Typography>
                        <Typography>Popularity</Typography>
                      </Box>
                      <Box>
                        <Typography>${item?.avg_cost_for_two}</Typography>
                        <Typography>cost for two</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </Grid>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default PopularOnes;
