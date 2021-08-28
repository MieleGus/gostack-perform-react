import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  totalPrice: number;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  results,
  onAddToWishList,
}: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return;
  }, [results]);
  return (
    <div>
      {results.map((product) => (
        <ProductItem
          product={product}
          onAddToWishList={onAddToWishList}
          key={product.id}
        />
      ))}
    </div>
  );
}
