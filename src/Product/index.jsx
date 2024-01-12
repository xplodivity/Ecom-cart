import "./product.css";

const Product = ({ products, addToCart, cart }) => {
  return (
    <div className="productContainer">
      {products.map((product) => {
        return (
          <div className="product-wrapper">
            <img width="100%" height={300} src={product.thumbnail} alt="" />

            <div className="productDetails">
              <div>{product.title}</div>
              <div>{product.price}</div>
            </div>

            <div>
              <button
                className="add-product"
                onClick={() => addToCart(product)}
                disabled={cart.some((item) => item.id === product.id)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
