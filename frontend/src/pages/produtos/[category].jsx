import styled from "styled-components";
import Filters from "!/Filters";
import Title from "!/Title";
import PagedProducts from "!/PagedProducts";
import { api, getProducts } from "-/src/services";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0 50px;
`;

const Products = ({ products, total }) => {
  return (
    <Container>
      <Title title="Produtos" />
      <Filters />
      <PagedProducts initialProducts={products} total={total} />
    </Container>
  );
};

Products.getInitialProps = async ({ query }) => {
  try {
    const {
      data: { products, total },
    } = await getProducts(1, 12);
    return { category: query.category, products, total };
  } catch (error) {
    return {};
  }
};
export default Products;
