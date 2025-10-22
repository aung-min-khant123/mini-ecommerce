"use client";
import {
  Box,
  Grid,
  Typography,
  Modal,
  IconButton,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductByCategoryQuery } from "../services/api";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSearchParams, useRouter } from "next/navigation";
import { setSelectedProductType } from "../services/productSlice";
import { addToCart } from "../services/cartSlice";

type Props = {};

function Products({}: Props) {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state: any) => state.products);
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductByCategoryQuery(selectedCategory);

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParamValue = searchParams.get("product-detail");

  console.log("params", queryParamValue);

  const handleOpen = (product: any) => {
    setSelectedProduct(product);
    setQuantity(0);
    setOpen(true);

    router.push(`/productDetails/${product?.id}`);

    // router.push(`?product-detail=${product?.id}`);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleAdd = () => setQuantity((prev) => prev + 1);
  const handleRemove = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 1));

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 375;
  return (
    <>
      <Grid container spacing={2} sx={{ justifyContent: "center", my: 4 }}>
        {products?.products?.map((product: any) => (
          <Grid
            size={{ xs: 6, md: 2, sm: 4 }}
            key={product.id}
            sx={{ border: "1px solid #2d2d2d" }}
          >
            <Box
              p={2}
              borderRadius="5px"
              textAlign="center"
              sx={{
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#f0f0f0",
                },
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch(setSelectedProductType(product)), handleOpen(product);
              }}
            >
              <Image
                src={product?.thumbnail}
                alt={product.title}
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  marginBottom: "5px",
                  borderRadius: "5px",
                }}
              ></Image>

              <Typography fontWeight="bold">
                {/* =======
                  objectFit: "contain",
                  marginBottom: "10px",
                  borderRadius: "10px",
                }}
              ></Image>

              <Typography variant="overline" fontWeight="bold">
>>>>>>> 2c4670c1f441069a065eba7c55830fa3ba0c6db1 */}
                {product.title}
              </Typography>
              <Typography
                color="black"
                sx={{
                  margin: "0px",
                }}
              >
                ${product.price}
              </Typography>
            </Box>
            <Button
              size="small"
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              Add to cart
            </Button>
          </Grid>
        ))}
      </Grid>
      {/* <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "lightgray",
            p: 4,
            borderRadius: "15px",
            boxShadow: 16,
            width: { xs: "50%", sm: "70%", md: "100%" },
            height: { xs: "50%", sm: "auto", md: "auto" },
            maxWidth: 500,
// =======
//             borderRadius: "40px",
//             boxShadow: 20,
//             width: "90%",
//             maxWidth: 450,
// >>>>>>> 2c4670c1f441069a065eba7c55830fa3ba0c6db1
            textAlign: "center",
          }}
        >
          {selectedProduct && (
            <>
              <img
                src={selectedProduct.thumbnail}
                alt={selectedProduct.title}
                style={{
                  width: isMobile ? "100%" : "50%",
                  height: "50%",
                  objectFit: "cover",
// =======
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "contain",
// >>>>>>> 2c4670c1f441069a065eba7c55830fa3ba0c6db1
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <Typography fontWeight="bold" sx={{
                fontSize: { xs: '16px', sm: '20px', md: '25px' },
                marginBottom: { xs: '13px', sm: '15px', md: '20px' }
              }}>
                {selectedProduct.title}
              </Typography>
              <Typography variant="h6" color="black" sx={{
                marginBottom: { xs: '4px', sm: '15px', md: '20px' }
              }}>
                ${selectedProduct.price}
              </Typography>

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ mb: { xs: '0px', sm: 3, md: 4 } }}
              >
                <IconButton onClick={handleRemove}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="subtitle2">
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
                sx={{ 
                  fontWeight: "bold",
                  fontSize: { xs: '10px', sm: '12px', md: '14px'}
                 }}
              >
                Add to your cart
              </Button>
            </>
          )}
        </Box>
      </Modal> */}
    </>
  );
}

export default Products;
