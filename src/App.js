import Navbar from "./components/Navbar";
import "./App.css";
import SearchBar from "./components/SearcheBar";
import ProductList from "./components/ProductList";
import { useState } from "react";
import { products } from "./components/datas";
import ProductNotFound from "./components/ProductNotFund";

function App() {
  const [showStockOnly, setShowStockOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [range, setRange] = useState(0);

  const changeRange = (e) => {
    setRange(e.target.value);
  };

  const visibleProducts = products.filter((product) => {
    if (showStockOnly && !product.stock) {
      return false;
    }

    if (search && !product.title.includes(search)) {
      return false;
    }

    // if (range && !product.stock(range)) {
    //   return false;
    // }
    return true;
  });

  //   const filterProductQty = ({ productItem }, range) => {

  //   };

  return (
    <>
      <Navbar />
      <div className="container p-4">
        <div className="d-flex justify-content-end">
          <div>
            <SearchBar
              search={search}
              onSearchChange={setSearch}
              showStockOnly={showStockOnly}
              onShowStockOnlyChange={setShowStockOnly}
            />
            <div className="d-flex justify-content-between">
              <input
                type="range"
                name="rg"
                id="rg"
                min="0"
                max="100"
                defaultValue={0}
                onInput={changeRange}
              />
              <label htmlFor="rg">{range}</label>
            </div>
          </div>
        </div>
        {visibleProducts.length !== 0 ? (
          <ProductList products={visibleProducts} />
        ) : (
          <ProductNotFound />
        )}
      </div>
    </>
  );
}

export default App;
