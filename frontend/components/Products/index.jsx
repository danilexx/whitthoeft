import React from "react";
import PropType from "prop-types";
import { useSelector, shallowEqual } from "react-redux";
import Router from "next/router";
import Link from "next/link";
import useSelfPage from "-/src/utils/useSelfPage";
import getProductImage from "-/src/utils/getProductImage";
import {
  ProductContainer,
  ImageContainer,
  ProductImage,
  Info,
  Title,
  Price,
  Container,
  OldPrice,
  PriceDesc,
  ProductsContainer,
} from "./styles";
import FavoriteFloater from "!/FavoriteFloater";
import { productSample } from "-/src/samples";
import getRandomImage from "-/src/utils/getRandomImage";

const Products = React.forwardRef(
  (
    {
      productsNumber,
      products,
      className,
      children,
      selfPage = false,
      postFunction,
    },
    ref
  ) => {
    return (
      <ProductsContainer className={className} ref={ref}>
        {children}
        {products
          ? products.map(e => (
              <Product
              selfPage={selfPage}
              postFunction={postFunction}
              info={e}
              key={e.id}
              />
            ))
          : [...Array(productsNumber)].map((e, index) => (
              <Product
              info={productSample}
              postFunction={postFunction}
              key={index}
              />
            ))}
      </ProductsContainer>
    );
  }
);
Products.defaultProps = {
  productsNumber: 3,
};
const Product = ({ info, postFunction }) => {
  // const selfPage = useSelfPage("/produto", `/produto`);
  const user = useSelector(state => state.user, shallowEqual);
  const {
    img: { url: sourceImage },
    price,
    name,
    oldPrice,
    id,
  } = info;
  const formatedPrice = price.toFixed(2);
  const formatedParceledPrice = (price / 2).toFixed(2);

  function handleGoTo() {
    Router.push(`/produto/${name}`);
    postFunction();
  }
  return (
    <ProductContainer>
      <ImageContainer onClick={handleGoTo}>
        <ProductImage src={getProductImage(sourceImage)} />
      </ImageContainer>
      <Info onClick={handleGoTo}>
        <Title>{name}</Title>
        {oldPrice && <OldPrice>{oldPrice}</OldPrice>}
        <Price>R$ {formatedPrice}</Price>
        <PriceDesc>até 2x de R$ {formatedParceledPrice} sem juros </PriceDesc>
      </Info>
      {user.email && <FavoriteFloater productId={id} />}
    </ProductContainer>
  );
};

Product.propTypes = {
  info: PropType.shape({
    img: PropType.object,
    price: PropType.number,
    productName: PropType.string,
    oldPrice: PropType.oneOfType([PropType.any, PropType.number]),
    id: PropType.number,
    postFunction: PropType.func,
  }),
};

Product.defaultProps = {
  info: productSample,
  postFunction: () => {},
};

export default Products;
