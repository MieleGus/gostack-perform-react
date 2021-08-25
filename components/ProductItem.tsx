import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
//caso parâmetro passado seja um objeto, necessário usar Object.is para compará-los mais profundamente,
//cuidado com a complexidade do objeto para ver se vale a pena o processamento gasto
