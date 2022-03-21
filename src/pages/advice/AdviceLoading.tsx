import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

export const AdviceLoading: React.FC = () => {
  return (
    <Box width="100%">
      <Typography color="white" fontWeight="bold">
        Generate a advice
      </Typography>
      <br />
      <CircularProgress />
    </Box>
  );
};
