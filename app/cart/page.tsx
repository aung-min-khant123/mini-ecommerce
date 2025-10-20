import React from "react";
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
        <Grid size={{ xs: 12, md: 8, sm: 12 }}>
          <Paper sx={{ p: 3, borderRadius: 10 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>
              Cart Items (2)
            </Typography>

            <Stack spacing={4}>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={{ mr: 2 }}>
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
                  <Typography fontWeight={700}>CAT 914K</Typography>
                  <Typography variant="body2" color="text.secondary">
                    The CAT 914K Wheel Loader delivers high productivity and
                    fuel efficiency, making it ideal for demanding job sites.
                  </Typography>
                  <Typography color="primary" fontWeight={700} sx={{ mt: 1 }}>
                    $35.00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                  <IconButton size="small">
                    <RemoveIcon />
                  </IconButton>
                  <Typography sx={{ mx: 1 }}>1</Typography>
                  <IconButton size="small">
                    <AddIcon />
                  </IconButton>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                  <Typography fontWeight={700}>$35.00</Typography>
                  <Button startIcon={<DeleteOutlineIcon />} color="error">
                    Remove
                  </Button>
                </Box>
              </Paper>

              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{  mr: 2 }}
                >
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
                </Box>
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
            <Button  fullWidth variant="outlined" sx={{ py: 1.5 }}>
              Continue Shopping
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
