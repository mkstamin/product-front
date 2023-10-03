import Product from "../product/Product";
import Wrapper from "./GridView.style";

const GridView = ({ products }) => (
  <Wrapper>
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  </Wrapper>
);

export default GridView;
