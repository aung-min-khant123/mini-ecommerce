"use client";
import { Box, Grid, Typography, Modal, IconButton, Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetProductByCategoryQuery } from "../services/api";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type Props = {};

function Products({}: Props) {
  const { selectedCategory } = useSelector((state: any) => state.products);
  const { data: products, isLoading, isError } =
    useGetProductByCategoryQuery(selectedCategory);

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(0);

  const handleOpen = (product: any) => {
    setSelectedProduct(product);
    setQuantity(0);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleAdd = () => setQuantity((prev) => prev + 1);
  const handleRemove = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 1));

  return (
    <>
      <Grid container spacing={2} sx={{justifyContent:"center", mt:4}}>
        {products?.products?.map((product: any) => (
          <Grid size={{ xs: 6, md: 2, sm: 4 }} key={product.id}>
            <Box
              p={2}
              border="1px solid #2d2d2d"
              borderRadius="5px"
              textAlign="center"
              sx={{
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.05)", backgroundColor: "#f0f0f0" },
                cursor: "pointer",
              }}
              onClick={() => handleOpen(product)}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              />
              <Typography variant="body1" fontWeight="bold">
                {product.title}
              </Typography>
              <Typography variant="body2" color="black">
                ${product.price}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "lightgray",
            p: 4,
            borderRadius: "15px",
            boxShadow: 16,
            width: "100%",
            maxWidth: 500,
            textAlign: "center",
          }}
        >
          {selectedProduct && (
            <>
              <img
                src={selectedProduct.thumbnail}
                alt={selectedProduct.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <Typography variant="h4" fontWeight="bold" mb={2}>
                {selectedProduct.title}
              </Typography>
              <Typography variant="h6" color="black" mb={2}>
                ${selectedProduct.price}
              </Typography>

              <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
                <IconButton onClick={handleRemove}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="subtitle2" mx={2}>
                  {quantity}
                </Typography>
                <IconButton onClick={handleAdd}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Button
                variant="outlined"
                color="success"
                startIcon={<ShoppingCartIcon />}
                sx={{ fontWeight: "bold" }}
              >
                Add to your cart
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}

export default Products;
