import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import "./Login.css";
import { useNavigate } from "react-router";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const sendCode = async () => {
    if (email.includes("+91")) {
      let extractCode = email.slice(0, 3);

      let url = "https://staging.fastor.in/v1/pwa/user/register";
      let res = await axios.post(url, {
        phone: email,
        dial_code: extractCode,
      });

      console.log(res);
      if (res?.data?.status === "Success") {
        navigate("/verify", {
          state: { phone: email, dial_code: extractCode },
        });
      }
    }
  };
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12}>
        <Box className="l-title">
          <Typography className="l-Enter-Text">
            Enter Your Mobile Number
          </Typography>
          <Typography className="l-description-Text">
            We will send you the 4 digit verification code
          </Typography>
        </Box>
        <Box className="l-login-box-Minput">
          <TextField
            placeholder="Ex: +91 **********"
            className="l-Email-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            disabled={email.length < 13}
            onClick={() => {
              sendCode();
            }}
            className="l-Send-Button"
          >
            Send Code
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
