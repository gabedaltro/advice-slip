import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import api from "../../services/api/api";
import { Advice } from "../../types/advice";
import { AdvicePage } from "./Advice";
import { AdviceLoading } from "./AdviceLoading";

export const AdviceSlip: React.FC = () => {
  const [advice, setAdvice] = useState<Advice>();
  const [loading, setLoading] = useState(false);

  const makeAdvice = useCallback(() => {
    if (!api) return;
    setLoading(true);

    api
      .get("/advice")
      .then((response) => {
        setAdvice(response.data.slip);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    makeAdvice();
  }, [makeAdvice]);

  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      {!advice || loading ? (
        <AdviceLoading />
      ) : (
        <AdvicePage advice={advice} makeAdvice={makeAdvice} />
      )}
    </Box>
  );
};
