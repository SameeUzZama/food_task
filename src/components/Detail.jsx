import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useLocation } from "react-router";
import { Box } from "@mui/system";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Logo from "../assets/Fastor Logo.png";
import ShareIcon from "@mui/icons-material/Share";
import Popover from "@mui/material/Popover";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Detail = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { state } = useLocation();
  return (
    <>
      <div>
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
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
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
          <ShareIcon onClick={handleClick} />
          <Box>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>
                <FacebookShareButton url={state?.item?.images[0].url}>
                  <FacebookIcon />
                </FacebookShareButton>
              </Typography>
              <Typography sx={{ p: 2 }}>
                <EmailShareButton url={state?.item?.images[0].url}>
                  <MailIcon />
                </EmailShareButton>
              </Typography>
              <Typography sx={{ p: 2 }}>
                <LinkedinShareButton url={state?.item?.images[0].url}>
                  <LinkedInIcon />
                </LinkedinShareButton>
              </Typography>
              <Typography sx={{ p: 2 }}>
                <TelegramShareButton url={state?.item?.images[0].url}>
                  <TelegramIcon />
                </TelegramShareButton>
              </Typography>
              <Typography sx={{ p: 2 }}>
                <TwitterShareButton url={state?.item?.images[0].url}>
                  <TwitterIcon />
                </TwitterShareButton>
              </Typography>
              <Typography sx={{ p: 2 }}>
                <WhatsappShareButton url={state?.item?.images[0].url}>
                  <WhatsAppIcon />
                </WhatsappShareButton>
              </Typography>
            </Popover>
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "25%",
            left: "35%",
          }}
        >
          <img height="100" src={Logo} alt="logo" />
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
            alt="resturant"
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
