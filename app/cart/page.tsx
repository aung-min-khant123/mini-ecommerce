"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  IconButton,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Product } from "../services/cartSlice";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { items, totalQuantity } = useSelector((state: any) => state.cart);

  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => setQuantity((prev) => prev + 1);
  const handleRemove = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleStart = () => setQuantity((prev) => prev * 0);
  console.log("items>>", items);
  return (
    <Box
      sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Shopping Cart
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Review your items before checkout
      </Typography>

      <Grid container spacing={5}>
        <Grid size={{ md: 8 }}>
          <Paper sx={{ p: 3, borderRadius: 4, variant: "outlined" }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>
              Cart Items {totalQuantity}
            </Typography>

            <Stack spacing={4}>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Grid
                  sx={{
                    display: { xs: "flex" },
                    flexDirection: {
                      xs: "column",
                      md: "row",
                      sm: "row",
                    },
                    // justifyContent: {xs: "center"},
                    alignItems: { xs: "center" },
                    textAlign: { xs: "center" },
                  }}
                >
                  {items.length === 0 ? (
                    <Typography>Your cart is empty</Typography>
                  ) : (
                    items.map((item: Product, index: number) => {
                      return (
                        <React.Fragment key={index}>
                         <CartItem item={item} />
                        </React.Fragment>
                      );
                    })
                  )}
                </Grid>
              </Paper>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4, sm: 6 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
              Order Summary
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography color="text.secondary">Subtotal (3 items)</Typography>
              <Typography fontWeight={700}>$535.00</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography color="text.secondary">Shipping</Typography>
              <Typography>$9.99</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography color="text.secondary">Tax</Typography>
              <Typography>$42.80</Typography>
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography variant="subtitle1" fontWeight={700}>
                Total
              </Typography>
              <Typography variant="h6" color="primary" fontWeight={700}>
                $587.79
              </Typography>
            </Box>

            <Button fullWidth variant="contained" sx={{ mb: 1, py: 1.5 }}>
              Proceed to Checkout
            </Button>
            <Button fullWidth variant="outlined" sx={{ py: 1.5 }}>
              Continue Shopping
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
