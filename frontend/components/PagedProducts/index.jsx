import { Container, TopInfoContainer, Title, MyProducts } from "./styles";
import Select from "!/Select";
import PagesSelector from "!/PagesSelector";
import { api, getProducts } from "-/src/services";

const PagedProducts = ({ initialProducts, total }) => {
  const [products, setProducts] = React.useState(initialProducts);
  const pages = React.useMemo(() => Math.ceil(total / 12), [total]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [order, setOrder] = React.useState(null);

  React.useEffect(() => {
    const ReFetchProducts = async () => {
      const response = await getProducts(currentPage, 12);
      const {
        data: { products: fetchedProducts },
      } = response;
      setProducts(fetchedProducts);
    };
    ReFetchProducts();
  }, [currentPage]);
  React.useEffect(() => {
    setProducts(productsState => {
      switch (order) {
        case "A-Z": {
          return productsState
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name));
        }
        case "Z-A": {
          return productsState
            .slice()
            .sort((a, b) => b.name.localeCompare(a.name));
        }
        case "Preço Menor": {
          return productsState.slice().sort((a, b) => a.price - b.price);
        }
        case "Preço Maior": {
          return productsState.slice().sort((a, b) => b.price - a.price);
        }
        default: {
          return productsState;
        }
      }
    });
  }, [order]);
  return (
    <Container>
      <TopInfoContainer>
        <Title>Produtos</Title>
        <Select
          options={["Padrão", "A-Z", "Z-A", "Preço Menor", "Preço Maior"]}
          onChange={value => setOrder(value)}
        />
      </TopInfoContainer>

      <MyProducts products={products} />
      <PagesSelector
        pageNumber={pages}
        activePage={currentPage}
        onPageChange={index => setCurrentPage(index + 1)}
      />
    </Container>
  );
};

export default PagedProducts;
