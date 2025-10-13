import { Grid } from '@mui/material'
import React from 'react'

function Product({ product } : {product: {title: string }}) {
  return (
    <>
    <Grid size={{xs: 12, sm:6, md:2}}>
            {product.title}
    </Grid>
    </>
  )
}

export default Product