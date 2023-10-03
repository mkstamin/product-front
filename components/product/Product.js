import { formatPrice } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Wrapper from "./Product.style";

const Product = ({ data }) => {
  const { id, name, price, image } = data;
  return (
    <Wrapper>
      <div className="container">
        <Image src={image} alt={name} height={300} width={300} />
        <Link href={`/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

export default Product;
