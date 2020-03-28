import { useSelector, shallowEqual } from "react-redux";
import { useContext } from "react";
import FavoriteFloater from "!/FavoriteFloater";
import {
  ProductImageContainer,
  ProductCurrentImage,
  ProductOtherImages,
  ProductOtherImage,
} from "./styles";
import { ProductContext } from "../ProductInfo";

const ProductImage = () => {
  const {
    product: {
      id,
      img: { url },
      imgList,
    },
  } = useContext(ProductContext);
  const user = useSelector(state => state.user, shallowEqual);
  const [currentImage, setCurrentImage] = React.useState(url);
  return (
    <ProductImageContainer>
      <ProductCurrentImage src={currentImage} />
      <ProductOtherImages>
        <ProductOtherImage onClick={() => setCurrentImage(url)} src={url} />

        {imgList.map(image => (
          <ProductOtherImage
            key={image.id}
            onClick={() => setCurrentImage(image.url)}
            src={image.url}
          />
        ))}
      </ProductOtherImages>
      {user.email && <FavoriteFloater productId={id} />}
    </ProductImageContainer>
  );
};

export default ProductImage;
