import { useRouter } from "next/router";
import { NavItemWithPopup } from "./related";
import { PopupButtonsContainer } from "../styles";
import LinkedButton from "!/LinkedButton";

const CategoryList = [
  {
    id: 0,
    label: "Camisetas",
    link: "camisetas",
  },
  {
    id: 1,
    label: "Bermudas",
    link: "bermudas",
  },
  {
    id: 2,
    label: "Acessorios",
    link: "acessorios",
  },
  {
    id: 3,
    label: "Ver Todos",
    link: "all",
  },
];

const ProductsNavItem = () => {
  const router = useRouter();
  return (
    <NavItemWithPopup label="Produtos">
      <PopupButtonsContainer>
        {CategoryList.map(({ id, label, link }) => (
          <LinkedButton
            href="produtos"
            route={`/produtos/${link}`}
            shallow={router.pathname === "/produtos/[category]"}
            key={id}
            primary={label === "Ver Todos"}
            label={label}
          />
        ))}
      </PopupButtonsContainer>
    </NavItemWithPopup>
  );
};
export default ProductsNavItem;
