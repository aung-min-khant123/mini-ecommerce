"use client";
import {
  Box,
  Grid,
  Typography,
  Modal,
  IconButton,
  Button,
  Container,
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
  }

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleAdd = () => setQuantity((prev) => prev + 1);
  const handleRemove = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 1));

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 375;
  return (
    <>
      <Container maxWidth={"lg"} sx={{ mt: 6 }}>
        <Grid container spacing={2} 
        sx={{ 
          // justifyContent: "center", 
          my: 4,
          width: '100%'
        }}>
        {products?.products?.map((product: any) => (
          <Grid
            size={{ xs: 6, md: 3, sm: 4 }}
            key={product.id}
            sx={{
              cursor: "pointer", 
              border: "1px solid #2d2d2d",
              width: isMobile ? '150px' : '300px',
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "#f0f0f0",
              },
             }}
          >
            <Box
              p={2}
              borderRadius="5px"
              textAlign="center"
              display="flex"
              sx={{
                flexDirection: "column",
              }}
              onClick={() => {dispatch(setSelectedProductType(product)), handleOpen(product)}}
            >
              <Image
                src={product?.thumbnail}
                alt={product?.title}
                width={500}
                height={500}
                style={{
                  width: '100%',
                  height: "150px",
                  objectFit: "cover",
                  marginBottom: "5px",
                  borderRadius: "5px",
                  flexBasis: '60%',
                }}
              ></Image>
              <Box sx={{
                flexBasis: '40%',
              }}>
                <Typography fontWeight="bold">
                  {product?.title}
                </Typography>
                <Typography color="black" sx={{
                  margin: '0px',
                }}>
                  ${product?.price}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      </Container>
    </>
    );
  }

export default Products;
