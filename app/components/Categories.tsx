"use client";
import React from "react";
import Category from "./Category";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useGetCategoriesQuery } from "../services/api";
import { categories } from "../data/dummyData/data";

// import { categories  } from "../data/dummyData/data";

type CategoryApiItem = {
  slug: string;
  name: string;
};

interface LocalCategory {
  id: number;
  title: string;
  image?: string;
}

interface Photo {
  id: number;
  title: string;
  image: string;
}

function Categories() {

  const { data, isError, isLoading } = useGetCategoriesQuery(null);
  console.log("categories>>>", data);



  const combined: (CategoryApiItem & { image?: string })[] | undefined = data
    ?.slice(0, 6)
    .map((category: any, idx: any) => {
      const image = categories.find((c: LocalCategory) => c.id === idx);
      return { ...category, image: image?.image || "" };
    });

  // const combined: CategoryType[] | undefined = data?.slice(0, 6).map((category: any, idx: number) => {
  //   const image = categories[idx]?.image || "";
  //   return {
  //     ...category,
  //     image,
  //   };
  // });
  // console.log(combined)


  return (
    <>
      <Container maxWidth={"lg"} sx={{ mt: 6 }}>
        {isLoading && <Typography>Loading...</Typography>}
        {isError && <Typography>Error occured.</Typography>}
        <Grid container spacing={2}>

          {combined?.map((category, index) => {
            return (
              <React.Fragment key={index}>
                <Category category={category as any} index={index} />
              </React.Fragment>
            );
          })}

          {/* {combined?.map((category: CategoryType, index: number) => (
            <React.Fragment key={index}>
              <Category category={category} index={index} />
            </React.Fragment>
          ))} */
          }
        </Grid>
      </Container>
    </>
  );
}

export default Categories;
