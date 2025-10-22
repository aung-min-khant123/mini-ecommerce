"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductByCategoryQuery } from "../services/api";
import { setSelectedProductType } from "../services/productSlice";
import Link from "next/link";
import { addToCart } from "../services/cartSlice";

function Product({
  product,
}: {
  product: {
    title: string;
    id: number;
    price: number;
    thumbnail: string;
    quantity: number;
  };
}) {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 375;
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state: any) => state.products);
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductByCategoryQuery(selectedCategory);


  return (
    <>
      <Grid
        size={{ xs: 6, md: 3, sm: 4 }}
        key={product.id}
        sx={{
          border: "1px solid #2d2d2d",
          width: isMobile ? "150px" : "300px",
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
          onClick={() => {
            dispatch(setSelectedProductType(product));
          }}
        >
          <Link
            href={`/productDetails/${product?.id}`}
            style={{ textDecoration: "none" }}
          >
            <Image
              src={product?.thumbnail}
              alt={product?.title}
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "contain",
                marginBottom: "5px",
                borderRadius: "5px",
                flexBasis: "60%",
              }}
            ></Image>
          </Link>
          <Box
            sx={{
              flexBasis: "40%",
            }}
          >
            <Typography fontWeight="bold">{product?.title}</Typography>
            <Typography
              color="black"
              sx={{
                margin: "0px",
              }}
            >
              ${product?.price}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </Button>
        </Box>
      </Grid>
    </>
  );
}

export default Product;
