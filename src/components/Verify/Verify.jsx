import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Verify.css";
import { useNavigate, useLocation } from "react-router";
import axios from "axios";
import OTPInput from "otp-input-react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const Verify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const verifyOTP = async () => {
    let url = "https://staging.fastor.in/v1/pwa/user/login";
    let res = await axios.post(url, {
      otp: otp,
      phone: state.phone,
      dial_code: state.dial_code,
    });

    if (res?.data?.status === "Success") {
      navigate("/home", { state: { tokan: res.data.data.token } });
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "black",
          height: 40,
          width: 40,
          backgroundColor: "white",
          borderRadius: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowBackIosIcon onClick={() => window.history.go(-1)} />
      </Box>
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
          <Box>
            <Box className="o-title">
              <Typography className="o-Enter-Text">OTP Verification</Typography>
              <Typography className="o-description-Text">
                Enter the verification code we just sent on your mobile Number
              </Typography>
            </Box>
            <Box className="o-login-box-Minput">
              <Box className="o-Otp-input-parent">
                <OTPInput
                  onChange={(e) => setOtp(e)}
                  value={otp}
                  autoFocus
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  className="o-Otp-input"
                  placeholder={[1, 2, 3, 4, 5, 6]}
                />
              </Box>
              <Button
                variant="contained"
                disabled={otp.length < 6}
                onClick={() => {
                  verifyOTP();
                }}
                className="o-Send-Button"
              >
                Verify
              </Button>
            </Box>
            <Box>
              <Typography className="resend-otp">
                Didn't received code?{" "}
                <span style={{ color: "blue" }}>Resend</span>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Verify;
