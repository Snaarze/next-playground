import React from "react";
import AddCart from "./AddCart";
// when using use client every component that are reliant of this component are automatically going to be client rendering
// when using this it will automatically include this file to bundled

const ProductCard = () => {
  return (
    <div>
      <AddCart />
    </div>
  );
};

export default ProductCard;
