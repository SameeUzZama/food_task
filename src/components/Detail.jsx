import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useLocation } from "react-router";
import { Box } from "@mui/system";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const Detail = () => {
  const { state } = useLocation();
  return (
    <>
      <div>
        <Box sx={{position:"absolute", top:"20px", left:"20px", color:"black", height:40, width:40, backgroundColor:"white", borderRadius:2, display:"flex", justifyContent:"center", alignItems:"center"}}>
          <ArrowBackIosIcon onClick={()=>window.history.go(-1)} />
        </Box>
        <Card
          sx={{
            height: 800,
            border: "none",
            m: -1,
          }}
        >
          <CardMedia
            component="img"
            height="400"
            image={state.item?.images[0].url}
            alt="green iguana"
          />
          <Card
            sx={{
              height: 500,
              borderRadius: "20px",
              border: "none",
              mt: "-20px",
              position: "relative",
            }}
          >
            <CardContent>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", px: 3 }}
              >
                <Box>
                  <Typography>{state.item?.restaurant_name}</Typography>
                  <Typography>
                    {state.item?.location?.location_locality},{" "}
                    {state.item?.location?.city_name}
                  </Typography>
                  <Typography sx={{ color: "red", mt: 1 }}>
                    4 Offers Trending
                  </Typography>
                </Box>
                <Box>
                  <Typography>
                    <StarBorderIcon />
                    {state.item?.rating?.restaurant_avg_rating}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ px: 3, mt: 2 }}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores voluptatibus dolor ratione deleniti excepturi
                  necessitatibus inventore saepe a molestiae ullam.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Card>
      </div>
    </>
  );
};

export default Detail;
