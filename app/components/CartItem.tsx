import {
  AddCircleOutline,
  AddIcCallOutlined,
  RemoveCircleOutline,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  increaseQuantity,
  Product,
  decreaseQuantity,
  removeitem,
} from "../services/cartSlice";
import { useDispatch, useSelector } from "react-redux";

interface CartItemProp {
  item: Product;
}
const CartItem: React.FC<CartItemProp> = ({ item }) => {
  const dispatch = useDispatch();
  const disabled = item.quantity === 1;
  const itemTotalPrice = item.quantity * item.price;

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 3,
          display: "flex",
          width: "100%",
          mt: 2
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Grid
          container
          
          sx={{
            width: "100%",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid size={{ md: 2, xs: 12 }}>
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
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  marginBottom: 3,
                  border: "1px solid eee",
                  margin: "1rem",
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={700}>{item.title}</Typography>

              <Typography color="primary" fontWeight={700} sx={{ mt: 1 }}>
                {item.price}
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ md: 3, xs: 12 }}
            sx={{
              display: "flex",
              flexDirection: {},
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
              <IconButton
                disabled={disabled}
                size="large"
                onClick={() => dispatch(decreaseQuantity(item.id))}
              >
                <RemoveCircleOutline />
              </IconButton>
              <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
              <IconButton
                size="large"
                onClick={() => dispatch(increaseQuantity(item.id))}
              >
                <AddCircleOutline />
              </IconButton>
            </Box>
          </Grid>
          <Grid size={{ md: 3, xs:12 }}>
            <Box sx={{ textAlign: { xs: "" } }}>
              <Typography fontWeight={700}>{itemTotalPrice}</Typography>
              <Button
                startIcon={<DeleteOutlineIcon />}
                color="error"
                size="medium"
                onClick={() => dispatch(removeitem(item.id))}
              >
                Remove
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default CartItem;
