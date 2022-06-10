import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography variant="subtitle1">Subtitle1</Typography>
      <Typography variant="subtitle2">Subtitle2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        praesentium inventore assumenda necessitatibus porro veniam vero
        adipisci eius, est alias, illo ipsum. Earum nostrum tempore nulla,
        deserunt non unde perferendis.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
        nulla, maiores unde itaque doloremque, optio rem vel quos neque illo
        incidunt? Saepe accusantium beatae nulla, aut sit laudantium molestias
        nihil?
      </Typography>
    </div>
  );
};

export default MuiTypography;
