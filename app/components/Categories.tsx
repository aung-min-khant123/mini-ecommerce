"use client";
import React from "react";
import Category from "./Category";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useGetCategoriesQuery } from "../services/api";
import { categories  } from "../data/dummyData/data";


type CategoryType = {
  slug: string;
  name: string;
  image: string;
};

function Categories() {

  const { data, isError, isLoading } = useGetCategoriesQuery(null);
  const combined: CategoryType[] | undefined = data?.slice(0, 6).map((category: any, idx: number) => {
    const image = categories[idx]?.image || "";
    return {
      ...category,
      image,
    };
  });
  console.log(combined)

  return (
    <>
      <Container maxWidth={"lg"} sx={{ mt: 6 }}>
        {isLoading && <Typography>Loading...</Typography>}
        {isError && <Typography>Error occured.</Typography>}
        <Grid container spacing={2}>
          {combined?.map((category: CategoryType, index: number) => (
            <React.Fragment key={index}>
              <Category category={category} index={index} />
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Categories;
