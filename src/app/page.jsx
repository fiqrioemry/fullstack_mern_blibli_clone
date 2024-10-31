"use client";

import CarouselImage from "@/components/layout/CarouselImage";
import Colaboration from "@/components/layout/Colaboration";
import Discount from "@/components/layout/Discount";
import ProductsList from "@/components/layout/ProductsList";
import Promo from "@/components/layout/Promo";

export default function Home() {
  return (
    <section>
      {/* 1.carousel */}
      <CarouselImage />

      {/* 2.promo */}
      <Promo />

      {/* 3.discount */}
      <Discount />

      {/* 4. kolaborasi */}
      <Colaboration />

      {/* 5.products list */}
      <ProductsList />
    </section>
  );
}
