import React from "react";
import { Casino } from "@mui/icons-material";
import { Box, Icon, Typography } from "@mui/material";
import { Advice } from "../../types/advice";
import { makeStyles } from "@material-ui/core";
import { useApp } from "../../hooks/app";

const styles = makeStyles((theme) => ({
  container: {
    width: 500,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 280,
    },
  },
  box: {
    position: "absolute",
    left: "42.5%",
    [theme.breakpoints.up("md")]: {
      width: 30,
      left: "45%",
    },
    "&:hover": {
      filter: "brightness(1.75)",
    },
  },
}));

interface AdviceProps {
  makeAdvice: () => void;
  advice: Advice;
}

export const AdvicePage: React.FC<AdviceProps> = ({ advice, makeAdvice }) => {
  const classes = styles();
  const app = useApp();

  return (
    <Box
      className={classes.container}
      bgcolor="hsl(217, 19%, 24%)"
      position="relative"
      borderRadius="10px"
      padding="20px"
      height="270px"
    >
      <Box>
        <Box height="20px">
          <Typography
            fontSize={11}
            fontWeight="bold"
            color="hsl(150, 100%, 66%)"
          >
            A D V I C E # {advice?.id}
          </Typography>
        </Box>

        <Box height="100px" marginTop="20px">
          <Typography fontWeight="bold" color="hsl(193, 38%, 86%)">
            "{advice?.advice}"
          </Typography>
        </Box>

        <Box height="30px" marginLeft="-5px" marginTop="20px">
          {app.isMobile && app.windowWidth < 960 ? (
            <img src="/assets/pattern-divider-mobile.svg" alt="divider" />
          ) : (
            <img src="/assets/pattern-divider-desktop.svg" alt="divider" />
          )}
        </Box>

        <Box
          sx={{
            backgroundColor: "hsl(150, 100%, 66%)",
            padding: "12px",
            marginTop: "75px",
            cursor: "pointer",
            color: "black",
            width: "10%",
            borderRadius: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={classes.box}
        >
          <Icon onClick={makeAdvice}>
            <Casino />
          </Icon>
        </Box>
      </Box>
    </Box>
  );
};
