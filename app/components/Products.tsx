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
import Product from "./Product";

type Props = {};

function Products({}: Props) {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state: any) => state.products);
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductByCategoryQuery(selectedCategory);

  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParamValue = searchParams.get("product-detail");

  console.log("params", queryParamValue);

  // const handleOpen = (product: any) => {
  //   setSelectedProduct(product);
  //   setQuantity(0);
  //   setOpen(true);

  //   router.push(`/productDetails/${product?.id}`);
  // };


  return (
    <>
      <Container maxWidth={"lg"} sx={{ mt: 6 }}>
        <Grid container spacing={2} sx={{  my: 4 }}>
          {products?.products?.map((product: any, index: number) => (
            <React.Fragment key={index}>
              <Product product={product} />
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Products;
