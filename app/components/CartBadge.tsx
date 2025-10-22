import * as React from "react";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function CartBadge() {
  const { totalQuantity } = useSelector((state: any) => state.cart);
  return (
    <Link href="/cart">
      <Badge badgeContent={totalQuantity} color="warning">
        <ShoppingCartIcon color="action" sx={{ color: "#fff" }} />
      </Badge>
    </Link>
  );
}
