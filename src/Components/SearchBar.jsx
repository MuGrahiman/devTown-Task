import { SearchBarContainer, SearchInput } from "../Styles/SearchBarStyle.js";

function SearchBar({ setValue, Value }) {
  return (
    <SearchBarContainer>
      <SearchInput
        onChange={(e) => setValue(e.target.value)}
        value={Value}
        type="text"
      />
    </SearchBarContainer>
  );
}

export default SearchBar;
