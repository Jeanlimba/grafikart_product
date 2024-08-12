import Checkbox from "./Checkbox";
import Input from "./Input";

const SearchBar = ({
  search,
  onSearchChange,
  ShowStockOnly,
  onShowStockOnlyChange,
}) => {
  return (
    <div>
      <Input
        value={search}
        onChange={onSearchChange}
        placeholder="Rechercher..."
      />
      <Checkbox
        checked={ShowStockOnly}
        onChange={onShowStockOnlyChange}
        label=" Produit en stock"
      />
    </div>
  );
};

export default SearchBar;
