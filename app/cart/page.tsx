"use client";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import Image from "next/image";
import {
  CartItem,
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../services/cartSlice";
import { useAppDispatch, useAppSelector } from "../services/hooks";

const SHIPPING_COST = 9.99;
const TAX_RATE = 0.08; // 8%


interface CartItemCardProps {
  item: CartItem &
    Partial<{
      description: string;
      thumbnail: string;
      title: string;
      imageUrl: string;
    }>;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const handleIncrease = () => dispatch(increaseQuantity(item.id));
  const handleDecrease = () => dispatch(decreaseQuantity(item.id));
  const handleRemove = () => dispatch(removeItem(item.id));

  const itemTotal = item.price * item.quantity;

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ mr: 2, flexShrink: 0 }}>
        <Image
          src={item.thumbnail ?? item.imageUrl ?? "/file.svg"}
          alt={item.title ?? item.name}
          width={500}
          height={500}
          style={{
            width: "80px",
            height: "80px",
            objectFit: "contain",
          }}
        />
      </Box>

      <Box sx={{ flex: 1, minWidth: { xs: "100%", sm: "40%" } }}>
        <Typography fontWeight={700}>{item.title}</Typography>
        <Typography color="primary" fontWeight={700} sx={{ mt: 1 }}>
          ${item.price.toFixed(2)}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mr: { xs: 0, sm: 2 },
          mt: { xs: 2, sm: 0 },
          ml: { xs: 0, sm: "auto" },
        }}
      >
        <IconButton
          size="small"
          onClick={handleDecrease}
          disabled={item.quantity <= 1}
        >
          <RemoveIcon />
        </IconButton>
        <Typography sx={{ mx: 1, minWidth: "15px", textAlign: "center" }}>
          {item.quantity}
        </Typography>
        <IconButton size="small" onClick={handleIncrease}>
          <AddIcon />
        </IconButton>
      </Box>

      <Box sx={{ textAlign: "right", ml: { xs: "auto", sm: 2 } }}>
        <Typography fontWeight={700}>${itemTotal.toFixed(2)}</Typography>
        <Button
          startIcon={<DeleteOutlineIcon />}
          color="error"
          size="small"
          onClick={handleRemove}
        >
          Remove
        </Button>
      </Box>
    </Paper>
  );
};

export default function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  console.log("cartItems>>", cartItems);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + SHIPPING_COST + tax;

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

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6, sm: 12 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>
              Cart Items ({totalQuantity})
            </Typography>

            <Stack spacing={2}>
              {cartItems.length === 0 ? (
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ p: 4, textAlign: "center" }}
                >
                  Your cart is empty.
                </Typography>
              ) : (
                cartItems.map((item) => (
                  <CartItemCard key={item.id} item={item} />
                ))
              )}
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6, sm: 12 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
              Order Summary
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography color="text.secondary">
                Subtotal ({totalQuantity} items)
              </Typography>
              <Typography fontWeight={700}>${subtotal.toFixed(2)}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography color="text.secondary">Shipping</Typography>
              <Typography>${SHIPPING_COST.toFixed(2)}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography color="text.secondary">
                Tax ({TAX_RATE * 100}%)
              </Typography>
              <Typography>${tax.toFixed(2)}</Typography>
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="subtitle1" fontWeight={700}>
                Total
              </Typography>
              <Typography variant="h6" color="primary" fontWeight={700}>
                ${total.toFixed(2)}
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              sx={{ mb: 1, py: 1.5 }}
              disabled={cartItems.length === 0}
            >
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
