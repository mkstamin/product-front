import Link from "next/link";
import Wrapper from "./PageHero.style";

const PageHero = ({ product }) => (
  <Wrapper>
    <div className="section-center">
      <h3>
        <Link href="/">Products</Link>
        {product && "/ Single Product"}
      </h3>
    </div>
  </Wrapper>
);

export default PageHero;
