import { formatPrice } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "./ListView.style";

const ListView = ({ products }) => (
  <Wrapper>
    {products.map((product) => {
      const { id, image, name, price, description } = product;

      return (
        <article key={id}>
          <Image src={image} alt={name} height={300} width={300} />
          <div>
            <h4>{name}</h4>
            <h5 className="price">{formatPrice(price)}</h5>
            <p>{description.substring(0, 150)}...</p>
            <Link href={`/${id}`} className="btn">
              Details
            </Link>
          </div>
        </article>
      );
    })}
  </Wrapper>
);

export default ListView;
