import { AddIcCallOutlined, RemoveCircleOutline } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Product } from "../services/cartSlice";

interface CartItemProp {
  item: Product;
}
const CartItem: React.FC<CartItemProp> = ({ item }) => {
  return (
    <>
      <Grid size={{ xs: 12, sm: 4, md: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={item.thumbnail}
            alt="cosmetics"
            width={500}
            height={500}
            style={{
              width: "200px",
              height: "180px",
              objectFit: "cover",
              marginBottom: 3,
              border: "1px solid eee",
              margin: "1rem",
            }}
          />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 8, md: 5 }}>
        <Box sx={{ flex: 1 }}>
          <Typography fontWeight={700}>{item.title}</Typography>

          <Typography color="primary" fontWeight={700} sx={{ mt: 1 }}>
            {item.price}
          </Typography>
        </Box>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 12, md: 4 }}
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "column",
          },
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          mt: { xs: 2, sm: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mr: 1,
            mb: 2,
            background: "lightgray",
            borderRadius: 2,
          }}
        >
          <IconButton size="large">
            <RemoveCircleOutline />
          </IconButton>
          <Typography sx={{ mx: 2 }}>{}</Typography>
          <IconButton size="large">
            <AddIcCallOutlined />
          </IconButton>
        </Box>
      </Grid>
      <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
        <Typography fontWeight={700}>$35.00</Typography>
        <Button startIcon={<DeleteOutlineIcon />} color="error" size="medium">
          Remove
        </Button>
      </Box>
    </>
  );
};

export default CartItem;
