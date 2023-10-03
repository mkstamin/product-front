"use client";

import Filters from "@/components/filters/Filters";
import PageHero from "@/components/pageHero/PageHero";
import ProductList from "@/components/productList/ProductList";
import Sort from "@/components/sort/Sort";
import Wrapper from "./Home.style";

export default function Home() {
  return (
    <main>
      <PageHero />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
}
