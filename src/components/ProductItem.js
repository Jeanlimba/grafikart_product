const ProductItem = ({ product }) => {
  return (
    <>
      <div className="card h-100">
        <img src={product.images[0]} className="card-img-top" alt="..." />
        <div className="card-body bg-light ">
          <h5 className="card-title">{product.title}</h5>
          <div className="card-text d-flex justify-content-between">
            <strong>${product.price}</strong>

            <span className="badge rounded-pill bg-danger">
              {product.stock}
            </span>
          </div>
          <div className="mb-0">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="badge rounded-pill text-bg-dark mx-1"
              >
                Dark
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
