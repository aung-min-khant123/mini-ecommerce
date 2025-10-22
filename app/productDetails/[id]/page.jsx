"use client";

import React from 'react'
import { Box, Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

function ProductDetails() {
    const { selectedProductType } = useSelector((state) => state.products);
    console.log("selectedProductType>>>", selectedProductType);
  return (
    <>
        <Box sx={{
            justifySelf: 'center',
            backgroundColor: '#1976d2',
            display: 'flex',
            padding: '10px',
            gap: '20px',
            borderRadius: '20px',
            flexDirection: {
                sm: 'row',
                xs: 'column',
            },
            marginTop: {
                sm: '6%',
                xs: '8%',
            },
            width: {
                sm: '750px',
                xs: '300px',
            },
            height: {
                sm: '380px',
                xs: '550px',
            }
        }}>
            <Box sx={{
                flexBasis: '50%',
            }}>
                <img src={`${selectedProductType?.thumbnail}`} alt="shoe-img" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    padding: '20px',
                    borderRadius: '30px',
                }}/>
            </Box>
            <Box sx={{
                flexBasis: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: {
                    sm: '10px',
                    xs: '0px',
                },
                
            }}>
                <h1 style={{
                    marginLeft: '25%',
                    padding: '0px',
                }}>{selectedProductType?.title}</h1>
                <p style={{
                    padding: '0px',
                    marginLeft: '25%',
                }}>{selectedProductType?.category}</p>
                <h3 style={{
                    marginTop: '-20px',
                    marginLeft: '25%',
                }}>${selectedProductType?.price}</h3>
                <Box sx={{
                    marginLeft: '25%',
                    width: '120px',
                    display: 'flex',
                    height: '50px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <button style={{
                        width: '40px',
                        height: '40px',
                        fontSize: '20px',
                        borderRadius: '10px',
                        border: 'none',
                    }}>-</button>
                    <p>1</p>
                    <button style={{
                        width: '40px',
                        height: '40px',
                        fontSize: '20px',
                        borderRadius: '10px',
                        border: 'none',
                    }}>+</button>
                </Box>
                <button style={{
                    width: '150px',
                    height: '50px',
                    marginLeft: '25%',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 'bold',
                }}>Add to cart</button>
            </Box>
        </Box>
    </>
  )
}

export default ProductDetails