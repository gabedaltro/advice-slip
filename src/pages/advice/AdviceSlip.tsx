import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import api from "../../services/api/api";
import { Advice } from "../../types/advice";
import { AdvicePage } from "./Advice";
import { AdviceLoading } from "./AdviceLoading";
import { Casino } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    left: "42.5%",
    [theme.breakpoints.up("md")]: {
      width: 30,
      left: "45%",
    },
    "&:hover": {
      boxShadow: "0rem 0rem 1rem #52ffa8",
    },
  },
}));

export const AdviceSlip: React.FC = () => {
  const classes = useStyles();
  const [advice, setAdvice] = useState<Advice>({ advice: "", id: 0 });
  const [loading, setLoading] = useState(false);

  async function makeAdvice() {
    if (!api) return;
    setLoading(true);

    await api
      .get("/advice")
      .then((response) => {
        setAdvice(response.data.slip);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    makeAdvice();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      {loading ? (
        <AdviceLoading />
      ) : (
        <>
          <Box position="relative">
            <AdvicePage advice={advice} />
          </Box>
          <Box
            sx={{
              display: "flex",
              position: "sticky",
              backgroundColor: "hsl(150, 100%, 66%)",
              padding: "12px",
              marginTop: "-30px",
              cursor: "pointer",
              color: "black",
              borderRadius: "100px",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={classes.box}
            onClick={makeAdvice}
          >
            <Casino />
          </Box>
        </>
      )}
    </Box>
  );
};
