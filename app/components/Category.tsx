"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGetProductByCategoryQuery } from "../services/api";
import { categories } from "../data/dummyData/data";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../services/productSlice";
import { Grid3x3 } from "@mui/icons-material";
import Categories from "./Categories";



type CategoryType = {
  name: string;
  slug: string;
  image: string;
};

interface CategoryProps {
  category: CategoryType;
  index: number;
}

function Category({ category, index }: CategoryProps) {
  // const [showProducts, setShowProducts] = useState(false);
  // const { data: products, isLoading, isError } = useGetProductByCategoryQuery(category.slug, {skip: !showProducts});
  const { showProducts, selectedCategory } = useSelector(
    (state: any) => state.products
  );
  const dispatch = useDispatch();
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductByCategoryQuery(selectedCategory);
  const isActive = selectedCategory === category.slug;
  // console.log("ppp>>>", products?.products[0])


  return (
    <>
      <Grid
        onClick={() => dispatch(setSelectedCategory(category.slug))}
        size={{ xs: 6, md: 2, sm: 4 }}
        sx={{ background: isActive ? "#1976d2" : "light", position:"relative", border: isActive ? 'none' : "0.5px solid black",
          "&::before":{
            content:"''",
            display: isActive? "block" : "none",
            border: "25px solid transparent",
            borderTopColor: isActive ? "#1976d2" : "light",
            position:"absolute",
            bottom: "-2.6rem",
            left: "35%",
            // transform: "rotate(45deg)"
          }
         }}

      >
        <Box display="flex" flexDirection="column" alignItems="center" p={3} sx={{
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}>
          <Image
            src={category.image}
            alt={category.name}
            width={500}
            height={500}
            style={{ width:"80px", height:"80px",objectFit: "contain", marginBottom: 8 }}
          />
          <Typography style={{
            color: isActive ? "white" : '#1976d2', 
            fontFamily:"sans-serif", 
            fontWeight: 'bold', 
            letterSpacing: '2px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>{category.name}</Typography>
        </Box>
      </Grid>
    </>
  );
}

export default Category;
