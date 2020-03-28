import {
  Container,
  NavItemsContainer,
  Logo,
  IconsContainer,
  FakeNav,
} from "./styles";
import { SearchIcon } from "./icons";
import useSelfPage from "-/utils/useSelfPage";
import {
  ProductsNavItem,
  NavItemLink,
  UserNavItem,
  CartNavItem,
} from "./subcomponents";
import Search from "../Search";
import useResize from "-/utils/useResize";

const Nav = () => {
  const navRef = React.useRef();
  const [navSize, setNavSize] = React.useState(0);
  useResize(() => {
    if (navRef.current) {
      setNavSize(navRef.current.getBoundingClientRect().height);
    }
  }, [navRef]);
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);
  const selfPage = useSelfPage("/", "/");
  function handleLogoClick() {
    selfPage();
  }
  return (
    <>
      <FakeNav navSize={navSize} />
      <Container ref={navRef}>
        <Logo onClick={handleLogoClick} />
        <NavItemsContainer>
          <ProductsNavItem />
          <NavItemLink route="/favoritos" href="/favoritos">
            Favoritos
          </NavItemLink>
          <NavItemLink route="/contato" href="/contato">
            Contato
          </NavItemLink>
        </NavItemsContainer>
        <IconsContainer>
          <UserNavItem />
          <CartNavItem />
          <SearchIcon onClick={() => setIsSearchVisible(true)} />
        </IconsContainer>
        <Search
          isOn={isSearchVisible}
          size={navSize}
          setter={setIsSearchVisible}
        />
      </Container>
    </>
  );
};

export default Nav;
