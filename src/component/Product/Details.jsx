import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Details({ product }) {
  const { title, price, description, user } = product;
  return (
    <Box
      px={3}
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      gap="10px"
      height={"100%"}
    >
      <Typography variant="h2" style={{ fontSize: 35, fontWeight: "500" }}>
        {title}
      </Typography>
      <Box py={2}>
        <Typography style={{ fontSize: 24, fontWeight: "400" }}>
          Rs.{parseInt(price)}
          <span style={{ marginLeft: 20, textDecoration: "line-through" }}>
            Rs.{parseInt(price * 1.15)}
          </span>
        </Typography>
      </Box>
      <Button variant="contained" color="secondary">
        Add to Card
      </Button>
      <Typography
        variant="h6"
        style={{ fontSize: 22, fontWeight: "500", paddingTop: 35 }}
      >
        Description
      </Typography>
      <Typography>{description}</Typography>
      <Typography style={{ fontSize: 22, fontWeight: "400", paddingTop: 35 }}>
        Uploaded by: <span color="#333">{user.name}</span>
      </Typography>
    </Box>
  );
}

export default Details;
