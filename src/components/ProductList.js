import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <>
      <div className="col-12">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-3 my-2">
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
