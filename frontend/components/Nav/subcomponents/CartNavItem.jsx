import Router, { useRouter } from "next/router";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { IconWithPopup } from "./related";
import {
  ProductsCardContainer,
  ProductCardContainer,
  ProductCardImage,
  ProductCardName,
  ProductCardDeleteButton,
  ProductQuantity,
  EmptyCartInfo,
  MoreProductsInfo,
} from "../styles";
import { CartIcon } from "../icons";
import getProductImage from "-/src/utils/getProductImage";
import LinkedButton from "!/LinkedButton";
import actions from "-/src/redux/actions";

const CartNavItem = () => {
  const router = useRouter();
  const cartProducts = useSelector(store => store.cart, shallowEqual);
  const extraProducts = cartProducts.length - 3;
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(actions.cart.remove(id));
  }

  return (
    <IconWithPopup width="300px" Icon={CartIcon}>
      {cartProducts.length > 0 ? (
        <ProductsCardContainer>
          {cartProducts.slice(0, 3).map(({ product, quantity }) => {
            function handleProduct() {
              Router.push(`/produto/${name}`);
            }
            const { id, imgUrl, name } = product;
            return (
              <ProductCardContainer key={id}>
                <ProductCardImage
                  onClick={handleProduct}
                  src={getProductImage(imgUrl)}
                />
                <ProductCardName onClick={handleProduct}>
                  {name}
                </ProductCardName>
                {router.pathname !== "/checkout/[step]" && (
                  <ProductCardDeleteButton onClick={() => handleDelete(id)} />
                )}
                <ProductQuantity> {quantity}x </ProductQuantity>
              </ProductCardContainer>
            );
          })}
        </ProductsCardContainer>
      ) : (
        <EmptyCartInfo>
          Você ainda não colocou produtos no carrinho!
        </EmptyCartInfo>
      )}
      {extraProducts > 0 && (
        <>
          <MoreProductsInfo>
            {`+${extraProducts} ${
              extraProducts === 1 ? "Produto" : "Produtos"
            }`}
          </MoreProductsInfo>
          <LinkedButton
            style={{ width: "90%", marginBottom: 10 }}
            route="/carrinho"
            label="Ver Todos"
          />
        </>
      )}
      {cartProducts.length > 0 && (
        <LinkedButton
          style={{ width: "90%" }}
          primary
          route="/carrinho"
          label="Finalizar"
        />
      )}
    </IconWithPopup>
  );
};

export default CartNavItem;
