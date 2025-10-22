import * as React from "react";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useAppSelector } from "../services/hooks";

export default function CartBadge() {
const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);  return (
    <Link href="/cart">
      <Badge badgeContent={totalQuantity} color="warning">
        <ShoppingCartIcon color="action" sx={{ color: "#fff" }} />
      </Badge>
    </Link>
  );
}
