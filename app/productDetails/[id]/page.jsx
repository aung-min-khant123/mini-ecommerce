"use client";

import React from 'react'
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

function ProductDetails() {
    const { selectedProductType } = useSelector((state) => state.products);
    console.log("selectedProductType>>>", selectedProductType);
    const mobile = useMediaQuery('(max-width:600px)');
    console.log(selectedProductType)

    const statusYes = selectedProductType?.availabilityStatus.toLowerCase() === 'in stock';
    console.log("statusYes>>>", statusYes);
  return (
    <>
        <Box sx={{
            justifySelf: 'center',
            // backgroundColor: '#1976d2',
            backgroundColor: '#F6F6F6',
            display: 'flex',
            padding: '20px',
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
            },
            // border: '2px solid black',
            boxShadow: '2px 2px 4px 1px #B4B4B4',
        }}>
            <Box sx={{
                flexBasis: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRight: mobile ? 'none' : '1px solid gray',
                flexDirection: 'column-reverse',
                // borderBottom: mobile ? '1px solid black' : 'none',
            }}>
                {
                    mobile ? (
                        <hr style={{
                            width: '100%',
                            marginTop: '20px',
                            backgroundColor: 'white'
                        }}></hr>
                    ) : (
                        null
                    )
                }
                {/* <div style={{
                    position: 'absolute',
                    top: mobile ? '51%' : '27%',
                    left: mobile ? '48%' : '25%',
                    fontSize: mobile ? '17px' : '20px',
                    width: mobile ? '120px' : '140px',
                    height: mobile ? '50px' : '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '10px',
                    color: 'white',
                    fontWeight: 'bold',
                    backgroundColor: statusYes ? 'yellowgreen' : 'pinkred',
                }}>{selectedProductType.availabilityStatus}</div> */}
                <img src={`${selectedProductType?.thumbnail}`} alt="shoe-img" style={{
                    width: mobile ? '100%' : '80%',
                    height: mobile ? '100%' : '80%',
                    objectFit: 'cover',
                    padding: '20px',
                    borderRadius: '16px',
                    backgroundColor: 'white',
                    border: '1px solid gray',
                }}/>
            </Box>
            <Box sx={{
                borderRadius: '16px',
                width: '100%',
                flexBasis: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: {
                    sm: '20px',
                    xs: '10px',
                },
                
            }}>
                <h1 style={{
                    margin: '0px',
                    marginLeft: mobile ? '0' : '15%',
                    padding: '0px',
                    fontSize: mobile ? '25px' : '30px',
                    width: '100%',
                    color: 'black',
                    fontWeight: 'bold',
                    // letterSpacing: '2px',
                }}>{selectedProductType?.title}</h1>
                {/* <p style={{
                    padding: '0px',
                    margin: '0px',
                    marginLeft: mobile ? '0' : '15%',
                }}>{selectedProductType?.category}</p> */}
                <h3 style={{
                    // marginTop: '-20px',
                    margin: '0px',
                    marginLeft: mobile ? '0' : '15%',
                    color: 'greenyellow',
                    fontWeight: 'bold',
                    letterSpacing: '3px',
                }}>${selectedProductType?.price}</h3>
                <Box sx={{
                    margin: '0px',
                    marginLeft: mobile ? '0' : '15%',
                    width: '120px',
                    display: 'flex',
                    height: '50px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <button style={{
                        width: mobile ? '30px' : '40px',
                        height: mobile ? '30px' : '40px',
                        fontSize: mobile ? '16px' : '20px',
                        borderRadius: '10px',
                        border: 'none',
                        boxShadow: '1px 1px 2px 1px #B4B4B4',
                    }}>-</button>
                    <p style={{
                        fontWeight: 'bold',
                    }}>1</p>
                    <button style={{
                        width: mobile ? '30px' : '40px',
                        height: mobile ? '30px' : '40px',
                        fontSize: mobile ? '16px' : '20px',
                        borderRadius: '10px',
                        border: 'none',
                        boxShadow: '1px 1px 2px 1px #B4B4B4',
                    }}>+</button>
                </Box>
                <button style={{
                    width: '150px',
                    height: '50px',
                    marginLeft: mobile ? '0' : '15%',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    boxShadow: '1px 1px 2px 1px #114476',
                    backgroundColor: '#1976d2',
                    color: 'white',
                }}>Add to cart</button>
            </Box>
        </Box>
    </>
  )
}

export default ProductDetails