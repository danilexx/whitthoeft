import React from "react";
// import ProductClient from "stormycommerce-api-client/output/services/productClient";
import Products from "!/Products";
import Badges from "!/Badges";
import Header from "!/Header";
import Slider from "!/Slider";
import OfertRegister from "!/OfertRegister";
import { getHomePageProducts } from "-/src/services";
import Title from "-/components/Title";

const Home = ({ products }) => {
  // const [products, setProducts] = React.useState(initialProducts || []);
  // React.useEffect(() => {
  //   (async () => {
  //     if (!initialProducts) {
  //       try {
  //         const response = await getHomePageProducts();
  //         setProducts(response.data);
  //       } catch (error) {}
  //     }
  //   })();
  // }, []);
  return (
    <div>
      <Title title="Witthoeft" />
      <Slider />
      <Badges />
      <Header label="Lançamentos" />
      {products && products.length > 0 && <Products products={products} />}
      <OfertRegister />
    </div>
  );
};

Home.getInitialProps = async () => {
  try {
    const {
      data: { products },
    } = await getHomePageProducts();
    return { products };
  } catch (error) {
    console.log(error);
    return {};
  }
  // console.log(response);
};

export default Home;
