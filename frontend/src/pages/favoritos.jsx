import styled from "styled-components";
import { useSelector, shallowEqual } from "react-redux";
import Header from "!/Header";
import Products from "!/Products";
import Title from "!/Title";
import { getFavorites } from "-/services";
import Message from "!/Message";
import Loader from "!/Loader";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  min-height: 70vh;
  width: 100%;
`;

const Favorites = () => {
  const favorites = useSelector(state => state.favorites, shallowEqual);
  const [isLoading, setIsLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const user = useSelector(state => state.user, shallowEqual);
  const { token } = user;
  React.useEffect(() => {
    async function fetchFavorites() {
      if (!token) {
        return setIsLoading(false);
      }
      try {
        const response = await getFavorites();
        const { data: items } = response;
        setProducts(items);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFavorites();
  }, [favorites]);
  return (
    <Container>
      <Title title="Favoritos" />
      {(() => {
        if (token) {
          return (
            <>
              <Header label="Favoritos" />
              {products.length > 0 ? (
                <>
                  <Products products={products} />
                  {/* <PagesSelector /> */}
                </>
              ) : (
                <Message label="Você não favoritou nenhum produto ainda" />
              )}
            </>
          );
        }
        return (
          <Message label="Você precisa entrar na sua conta para visualizar seus produtos favoritados" />
        );
      })()}
      <Loader isLoading={isLoading} />
    </Container>
  );
};

export default Favorites;
