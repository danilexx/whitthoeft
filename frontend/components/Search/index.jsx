import Router from "next/router";
import {
  Container,
  SearchField,
  SearchResults,
  SearchResult,
  Close,
} from "./styles";
import { searchProducts } from "-/src/services";

const Search = ({ isOn, setter, size }) => {
  const [fieldValue, setFieldValue] = React.useState("");
  const fieldRef = React.useRef();
  const [searchResult, setSearchResult] = React.useState([]);
  React.useEffect(() => {
    if (isOn === true) {
      fieldRef.current.focus();
    } else if (isOn === false) {
      fieldRef.current.blur();
    }
  }, [isOn]);
  function handleClose() {
    if (fieldValue !== "") {
      setFieldValue("");
    } else {
      setter(false);
    }
  }
  function handleChange(e) {
    setFieldValue(e.target.value);
  }
  React.useEffect(() => {
    async function fetchResults() {
      if (fieldValue !== " " && fieldValue !== "") {
        const { data: searchResults } = await searchProducts(fieldValue);
        setSearchResult(searchResults);
      } else {
        setSearchResult([]);
      }
    }
    fetchResults();
  }, [fieldValue]);
  return (
    <Container isOn={isOn} size={size}>
      <SearchField
        placeholder="Pesquisar..."
        value={fieldValue}
        onChange={handleChange}
        ref={fieldRef}
      />
      <Close onClick={handleClose} />
      {searchResult.length > 0 && (
        <SearchResults>
          {searchResult.map((e, index) => (
            // eslint-disable-next-line prettier/prettier
            <SearchResult
              key={index}
              onClick={() => {
                setter(false);
                setFieldValue("");
                Router.push(`/produto/${e.productName}`);
              }}
            >
              {e.name}
            </SearchResult>
          ))}
        </SearchResults>
      )}
    </Container>
  );
};

export default Search;
