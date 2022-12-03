import { Box, Card, CardContent, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import PopularOnes from "./PopularOnes";
import YourTest from "./YourTest";

export const Home = () => {
  const [data, setData] = useState([]);
  const { state } = useLocation();

  const getApi = async () => {
    await fetch(`https://staging.fastor.in/v1/m/restaurant?city_id=118&&`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer" + " " + state.tokan,
        token: "Bearer" + " " + state.tokan,
      },
    }).then((ress) => ress.json().then((resData) => setData(resData)));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <Box>
      <Paper sx={{ zIndex: "99" }}>
        <Typography>Pre Order From </Typography>
        <Typography>Connaught Place </Typography>
      </Paper>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Card
          sx={{
            width:180,
            height: 120,
            borderRadius: "20px",
            mt: 1,
            backgroundColor: "#eceded",
            border: "none",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 25 }}
              color="text.secondary"
              gutterBottom
            >
              Samee
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              gutterBottom
            >
              Let's explore this evening
            </Typography>
            <Typography variant="h5" component="div"></Typography>
          </CardContent>
        </Card>
        <Box>
          <Typography>Offers</Typography>
          <Typography>Wallet</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 5 }}>
        <YourTest data={data} />
      </Box>
      <Box sx={{ mt: 5 }}>
        
        <PopularOnes data={data} />
      </Box>
    </Box>
  );
};

export default Home;
