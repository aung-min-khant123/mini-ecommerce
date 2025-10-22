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

export default function Cart() {
  
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => setQuantity((prev) => prev + 1);
  const handleRemove = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleStart = () => setQuantity((prev) => prev * 0);

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
              Cart Items (1)
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
                    flexDirection: { xs: "column", md: "row", sm: "row" },
                    // justifyContent: {xs: "center"},
                    alignItems: { xs: "center" },
                    textAlign: { xs: "center" },
                  }}
                >
                  <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src="https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg"
                        alt="cosmetics"
                        width={500}
                        height={500}
                        style={{
                          width: "200px",
                          height: "180px",
                          objectFit: "cover",
                          marginBottom: 3,
                          border: "1px solid eee",
                          margin : "1rem"
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 8, md: 5 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={700}>CAT 914K</Typography>
                      <Typography variant="body2" color="text.secondary">
                        The CAT 914K Wheel Loader delivers high productivity and
                        fuel efficiency, making it ideal for demanding job
                        sites.
                      </Typography>
                      <Typography
                        color="primary"
                        fontWeight={700}
                        sx={{ mt: 1 }}
                      >
                        $35.00
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    size={{ xs: 12, sm: 12, md: 4 }}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row", md: "column" },
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
                      <IconButton size="large" onClick={handleRemove}>
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ mx: 2 }}>{quantity}</Typography>
                      <IconButton size="large" onClick={handleAdd}>
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                  <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
                    <Typography fontWeight={700}>$35.00</Typography>
                    <Button
                      startIcon={<DeleteOutlineIcon />}
                      color="error"
                      size = "medium"
                      onClick={handleStart}
                    >
                      Remove
                    </Button>
                  </Box>
                </Grid>
              </Paper>

              {/* <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              > */}
              {/* <Box sx={{ mr: 2 }}>
                  <Image
                    src="https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg"
                    alt="cosmetics"
                    width={500}
                    height={500}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                      marginBottom: 3,
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography fontWeight={700}>313D2 GC</Typography>
                  <Typography variant="body2" color="text.secondary">
                    A larger cab with an ergonomic layout keeps you comfortable
                    all shift long.
                  </Typography>
                  <Typography color="primary" fontWeight={700} sx={{ mt: 1 }}>
                    $250.00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                  <IconButton size="small">
                    <RemoveIcon />
                  </IconButton>
                  <Typography sx={{ mx: 1 }}>2</Typography>
                  <IconButton size="small">
                    <AddIcon />
                  </IconButton>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                  <Typography fontWeight={700}>$500.00</Typography>
                  <Button startIcon={<DeleteOutlineIcon />} color="error">
                    Remove
                  </Button>
                </Box> */}
              {/* </Paper> */}
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4, sm: 6 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
              Order Summary
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography color="text.secondary">Subtotal (3 items)</Typography>
              <Typography fontWeight={700}>$535.00</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography color="text.secondary">Shipping</Typography>
              <Typography>$9.99</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography color="text.secondary">Tax</Typography>
              <Typography>$42.80</Typography>
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
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
