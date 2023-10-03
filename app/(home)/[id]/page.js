"use client";

import Error from "@/components/Error";
import Loading from "@/components/Loading";
import PageHero from "@/components/pageHero/PageHero";
import ProductImages from "@/components/productImages/ProductImages";
import Stars from "@/components/stars/Stars";
import { useProductsContext } from "@/context/products_context";
import { products_url as url } from "@/utils/constants";
import { formatPrice } from "@/utils/helpers";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Wrapper from "./ProductDetailsPage.style";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const {
    single_product_loding: loding,
    single_product_error: error,
    single_product: product,
    fetchSingleProducts,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProducts(`${url}/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loding) return <Loading />;
  if (error) return <Error />;

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: proId,
    company,
    image,
  } = product;

  return (
    <Wrapper>
      <PageHero product />
      <div className="section section-center page">
        <Link href="/" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={image} />
          <section className="contain">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="dec">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="info">
              <span>Product ID : </span>
              {proId}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
          </section>
        </div>
      </div>
    </Wrapper>
  );
}
