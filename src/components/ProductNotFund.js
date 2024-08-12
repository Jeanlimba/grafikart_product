const ProductNotFound = () => {
  return (
    <>
      <div className="alert alert-danger mt-4" role="alert">
        <h3 className="text-center fst-italic">
          <i className="bi bi-ban"></i>
          This name does not match any product in the list
        </h3>
      </div>
    </>
  );
};

export default ProductNotFound;
