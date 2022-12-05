import { Box, Card, CardContent, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import PopularOnes from "./PopularOnes";
import YourTest from "./YourTest";
import PercentIcon from "@mui/icons-material/Percent";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

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
      <Paper>
        <Typography>Pre Order From </Typography>
        <Typography>Connaught Place </Typography>
      </Paper>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Card
          sx={{
            width: 180,
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
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Let's explore this evening
            </Typography>
          </CardContent>
        </Card>
        <Box sx={{ display: "flex", flexDirection: "row", m: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                backgroundColor: "lightpink",
                borderRadius: 4,
                p: 2,
                m: 1,
              }}
            >
              <PercentIcon />
            </Box>
            <Typography>Offers</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{ backgroundColor: "lightBlue", borderRadius: 4, p: 2, m: 1 }}
            >
              <AccountBalanceWalletIcon />
            </Box>
            <Typography>Wallet</Typography>
          </Box>
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
