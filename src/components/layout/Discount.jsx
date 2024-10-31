"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "../ui/progress";

const discountProduct = [
  {
    id: 1,
    name: "Huawei Watcho GT 5",
    category: "watch",
    image: "/assets/discount/discount_product_1.webp",
    price: 3478999,
    stock: 10,
  },
  {
    id: 2,
    name: "Daia Detergen Bubuk 1.6KG",
    category: "Cleaning",
    image: "/assets/discount/discount_product_2.webp",
    price: 28000,
    stock: 55,
  },
  {
    id: 3,
    name: "Kain Lap Micro Fiber",
    category: "Cleaning",
    image: "/assets/discount/discount_product_3.webp",
    price: 23000,
    stock: 63,
  },
  {
    id: 4,
    name: "Fossil Watch Luxe",
    category: "watch",
    image: "/assets/discount/discount_product_4.webp",
    price: 750000,
    stock: 28,
  },
  {
    id: 5,
    name: "Sepatu Pria Air Walk Hitam",
    category: "shoes",
    image: "/assets/discount/discount_product_5.webp",
    price: 165000,
    stock: 43,
  },
  {
    id: 6,
    name: "Sepatu Sket Putih Adidora",
    category: "shoes",
    image: "/assets/discount/discount_product_6.webp",
    price: 145000,
    stock: 13,
  },
  {
    id: 7,
    name: "Royale Pelembut Pakaian 650ML",
    category: "cleaning",
    image: "/assets/discount/discount_product_7.webp",
    price: 21500,
    stock: 78,
  },
  {
    id: 7,
    name: "Huawei Watch Fit SE Black",
    category: "watch",
    image: "/assets/discount/discount_product_8.webp",
    price: 929000,
    stock: 7,
  },
  {
    id: 9,
    name: "Sepatu Skets Adidora Straight Cream",
    category: "shoes",
    image: "/assets/discount/discount_product_9.webp",
    price: 119000,
    stock: 23,
  },
  {
    id: 10,
    name: "Super Sol 1500 ML",
    category: "cleaning",
    image: "/assets/discount/discount_product_10.webp",
    price: 14500,
    stock: 43,
  },
  {
    id: 11,
    name: "Sport Towel Handuk Muka",
    category: "cleaning",
    image: "/assets/discount/discount_product_11.webp",
    price: 19000,
    stock: 63,
  },
  {
    id: 12,
    name: "Lap micro Fiber",
    category: "cleaning",
    image: "/assets/discount/discount_product_12.webp",
    price: 12000,
    stock: 44,
  },
];

const Discount = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto space-y-6">
        {/* discount banner */}
        <div className="rounded-md">
          <img
            className="rounded-xl"
            src="/assets/discon_banner.gif"
            alt="discount"
          />
        </div>

        {/* discount product card */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full group"
        >
          <CarouselContent>
            {discountProduct.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 sm:basis-1/4 md:basis-1/6 px-1"
              >
                <Card className="w-full h-auto md:min-h-[265px] ">
                  <CardContent className="py-1 px-1">
                    <div className="flex items-center justify-center ">
                      <img
                        className="h-[125px] md:h-[175px]"
                        src={item.image}
                        alt="discount_product"
                      />
                    </div>
                    <div className="px-1 ">
                      <div className="text-sm  text-start py-2">
                        <p>
                          Rp. <span className="font-bold">{item.price}</span>
                        </p>
                      </div>
                      <div className="py-2">
                        <Progress value={item.stock} />
                        <span className="text-[12px]">
                          {item.stock < 10
                            ? "sisa" + " " + item.stock
                            : item.stock >= 10 && item.stock <= 40
                            ? "Cepat habis"
                            : item.stock > 40
                            ? "beli sekarang"
                            : ""}
                        </span>
                      </div>
                    </div>
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

export default Discount;
