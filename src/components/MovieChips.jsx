import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { CenterFocusWeakOutlined } from "@mui/icons-material";

export default function MovieChips({ movieDetails }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
      {/* <Stack direction="row" spacing={1}> */}
      <Chip
        label={movieDetails.year}
        sx={{
          backgroundColor: "#0BA7FF",
          color: "success.white",
          fontSize: 14,
        }}
      />
      <Chip
        label={movieDetails.type}
        sx={{
          backgroundColor: "#51E97C",
          color: "success.white",
          fontSize: 14,
        }}
      />
      <Chip 
       label = {movieDetails.familyFriendly ? movieDetails.familyFriendly : movieDetails.imdbScore}
        clickable={false}
        sx={{
          backgroundColor: "#363A47",
          color: "success.white",
          fontSize: 14,
          
        }}
        />
      <Chip
        label={movieDetails.streamingService}
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
