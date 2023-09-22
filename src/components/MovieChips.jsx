import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function MovieChips({ movieDetails }) {
  const chipsData = [
    {
      label: movieDetails.year,
      bgColor: "#0BA7FF",
    },
    {
      label: movieDetails.type,
      bgColor: "#51E97C",
    },
    {
      label: movieDetails.familyFriendly ? movieDetails.familyFriendly : movieDetails.imdbScore,
      bgColor: "#363A47",
    },
    {
      label: movieDetails.streamingService,
      bgColor: "#FFC90B",
    },
  ];

  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
      {chipsData.map((chip, index) => {
        if (chip.label) {
          return (
            <Chip
              key={index}
              label={chip.label}
              sx={{
                backgroundColor: chip.bgColor,
                color: "success.white",
                fontSize: 14,
              }}
            />
          );
        }
        return null;
      })}
    </Stack>
  );
}
