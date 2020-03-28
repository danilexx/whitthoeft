import { useDispatch } from "react-redux";
import Link from "next/link";
import {
  Container,
  TableHeader,
  Title,
  Products,
  Product,
  Photo,
  TrashIcon,
  Name,
  Price,
  Quantity,
  Remove,
  Row,
  Plus,
  Minus,
  NumberInput,
} from "./styles";
import actions from "-/redux/actions";

const SIZES = {
  PRODUCT_SIZE: 40,
  PRICE_SIZE: 20,
  QTD_SIZE: 20,
  REMOVE_SIZE: 20,
};

const titles = [
  { label: "Produto", size: SIZES.PRODUCT_SIZE },
  { label: "Preço", size: SIZES.PRICE_SIZE },
  { label: "Quantia", size: SIZES.QTD_SIZE },
  { label: "Excluir", size: SIZES.REMOVE_SIZE },
];

const ProductsGrid = ({ products }) => {
  // const CartProducts = useSelector(state => state.cart, shallowEqual);
  const dispatch = useDispatch();
  const getSetQuantity = productId => quantity =>
    dispatch(actions.cart.setQuantity(productId, quantity));
  const handleDelete = id => {
    dispatch(actions.cart.remove(id));
  };
  return (
    <Container>
      <TableHeader>
        {titles.map((e, index) => (
          <Title key={index} size={e.size}>
            {e.label}
          </Title>
        ))}
      </TableHeader>
      <Products>
        {products.map(({ product, quantity }) => {
          const setQuantity = getSetQuantity(product.id);
          return (
            <Row>
              <Link href="/produto/[name]" as={`/produto/${product.name}`}>
                <Product as="a" size={SIZES.PRODUCT_SIZE}>
                  <Photo src={product.img.url} />
                  <Name>{product.name}</Name>
                </Product>
              </Link>
              <Price size={SIZES.PRICE_SIZE}>
                R$ {product.price.toFixed(2)}
              </Price>
              <Quantity size={SIZES.QTD_SIZE}>
                {" "}
                <Minus
                  onClick={() => {
                    const quantityState = Number(quantity);
                    if (quantityState - 1 > 0) {
                      setQuantity(quantityState - 1);
                    }
                  }}
                >
                  -
                </Minus>{" "}
                <NumberInput
                  value={String(quantity)}
                  type="number"
                  min="1"
                  max="99"
                  onBlur={e => {
                    if (Number(e.target.value) <= 0) {
                      setQuantity(1);
                    } else if (
                      e.target.value === "" ||
                      e.target.value === " "
                    ) {
                      setQuantity(1);
                    }
                  }}
                  onChange={e => setQuantity(e.target.value)}
                />
                <Plus
                  onClick={() => {
                    const quantityState = Number(quantity);
                    if (quantityState + 1 < 99) {
                      setQuantity(quantityState + 1);
                    }
                  }}
                >
                  +
                </Plus>{" "}
              </Quantity>
              <Remove size={SIZES.REMOVE_SIZE}>
                <TrashIcon onClick={() => handleDelete(product.id)} />
              </Remove>
            </Row>
          );
        })}
      </Products>
    </Container>
  );
};

export default ProductsGrid;
