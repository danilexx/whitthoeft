import styled from "styled-components";
import ProductInfo from "!/ProductInfo";
import { getProduct, getProducts } from "-/src/services";
import Title from "!/Title";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding: 0 100px;
  @media screen and (max-width: 1250px) {
    padding: 0;
  }
`;

const Product = ({ product, related }) => {
  return (
    <Container>
      <Title title={product.productName} />
      <ProductInfo info={product} related={related} />
    </Container>
  );
};
Product.getInitialProps = async ({ query }) => {
  const { data: product } = await getProduct(query.name);
  const {
    data: { products: related },
  } = await getProducts(1, 3);
  return {
    product,
    related,
  };
};

export default Product;
