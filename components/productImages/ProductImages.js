import Image from "next/image";
import Wrapper from "./ProductImages.style";

const ProductImages = ({ images }) => {
  return (
    <Wrapper>
      {images && (
        <Image
          src={images}
          alt="main_image"
          className="main"
          height={400}
          width={400}
        />
      )}
    </Wrapper>
  );
};

export default ProductImages;
