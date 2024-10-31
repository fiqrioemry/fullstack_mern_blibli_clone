"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PromoImage = [
  "/assets/bliblimart_promo.webp",
  "/assets/elektronik_promo.webp",
  "/assets/fashion_promo.webp",
  "/assets/comision_promo.webp",
];

const PromoList = [
  { image: "/assets/promo/promo1.webp", title: "Lihat semua" },
  { image: "/assets/promo/promo2.webp", title: "Semua promo" },
  { image: "/assets/promo/promo3.webp", title: "Tagihan & Isi Ulang" },
  { image: "/assets/promo/promo4.webp", title: "Cashback 11 Juta" },
  { image: "/assets/promo/promo5.webp", title: "Langkah Membumi" },
  { image: "/assets/promo/promo6.webp", title: "Diskon 50%" },
  { image: "/assets/promo/promo7.webp", title: "Hemat 1.1jt" },
  { image: "/assets/promo/promo8.webp", title: "Film gratis" },
  { image: "/assets/promo/promo9.webp", title: "BCA Blibli" },
  { image: "/assets/promo/promo10.webp", title: "Tukar Tambah" },
  { image: "/assets/promo/promo11.webp", title: "Keuangan" },
  { image: "/assets/promo/promo12.webp", title: "Promo Bank" },
  { image: "/assets/promo/promo13.webp", title: "Official Store" },
  { image: "/assets/promo/promo14.webp", title: "Click & Collect" },
  { image: "/assets/promo/promo15.webp", title: "Mom & Kid" },
  { image: "/assets/promo/promo16.webp", title: "Cicilan 0%" },
  { image: "/assets/promo/promo17.webp", title: "2 Jam Sampai" },
  { image: "/assets/promo/promo18.webp", title: "Kesehatan & Kecantikan" },
  { image: "/assets/promo/promo19.webp", title: "Bliblihome" },
];

const Promo = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto">
        {/* promo image */}
        <div className="flex flex-wrap">
          {PromoImage.map((item, index) => {
            return (
              <div className="w-1/2 md:w-1/4" key={index}>
                <div className="px-1 py-2">
                  <div className="rounded-md">
                    <img
                      className="h-full w-full"
                      src={item}
                      alt="promo_image"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* promo list */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {PromoList.map((item, index) => (
              <CarouselItem key={index} className="md:basis-[8%] px-1">
                <Card className="w-full h-[100px] ">
                  <CardContent className=" p-2">
                    <div className="flex items-center justify-center ">
                      <img
                        className="h-[50px] w-[50px]"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <p className="text-[10px] text-center">{item.title}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Promo;
