import { createContext } from "react";
import ProductProperties from "!/ProductProperties";
import ProductImage from "!/ProductImage";
import { ProductDescription } from "./subcomponents";
import { ProductContainer } from "./styles";
import Products from "!/Products";
import Header from "!/Header";
import Comentaries from "!/Comentaries";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet dolor, nulla eu eget aliquam est. Quam ullamcorper vulputate consectetur maecenas tristique cursus purus nec. In pharetra porttitor aliquam velit orci, pretium mattis quisque id Hac fusce phasellus lorem nunc dolor morbi non accumsan scelerisque.";

export const ProductContext = createContext({});

const ProductInfo = ({ info, related }) => {
  const {
    img: { url: imageUrl },
    id,
  } = info;
  const selfPage = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <ProductContext.Provider value={{ product: info }}>
      <ProductContainer>
        <ProductImage />
        <ProductProperties info={info} />
      </ProductContainer>
      <ProductDescription description={text} />
      <Header label="Relacionados" />
      <Products products={related} postFunction={selfPage} />
      <Comentaries />
    </ProductContext.Provider>
  );
};

export default ProductInfo;
