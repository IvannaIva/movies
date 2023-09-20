import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function MovieChips({ moviesData }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {/* <Stack direction="row" spacing={1}> */}
      <Chip
        label={moviesData.year}
        sx={{
          backgroundColor: "#0BA7FF",
          color: "success.white",
          fontSize: 14,
        }}
      />
      <Chip
        label={moviesData.type}
        sx={{
          backgroundColor: "#51E97C",
          color: "success.white",
          fontSize: 14,
        }}
      />
      <Chip
        label={moviesData.familyFriendly}
        clickable={false}
        sx={{
          backgroundColor: "#363A47",
          color: "success.white",
          fontSize: 14,
        }}
        />
      <Chip
        label={moviesData.streamingService}
        sx={{
          backgroundColor: "#FFC90B",
          color: "success.white",
          fontSize: 14,
        }}
      />
      {/* </Stack> */}
    </Stack>
  );
}
