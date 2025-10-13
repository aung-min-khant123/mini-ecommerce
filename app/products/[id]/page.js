"use client"
import {useParams} from "next/navigation";
import React from "react";

function Product() {
    const {id} = useParams();
    return <div>Product {id}</div>;
}
export default Product
