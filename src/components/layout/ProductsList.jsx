import { getProducts } from "@/lib/features/action/productsAction";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { Button } from "../ui/button";
import Image from "next/image";

const allCategories = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

const mensFashion = ["mens-shirts", "mens-shoes", "mens-watches"];
const womensFashion = [
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];
const electronics = ["laptops", "tablets", "smartphones", "mobile-accessories"];

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [activeTabs, setActiveTabs] = useState("all_categories");
  const [categories, setCategories] = useState(allCategories);
  const [totalDisplay, setTotalDisplay] = useState(0);
  const [limit, setLimit] = useState(12);

  const handleChanges = useCallback((params, value) => {
    setLimit(12);
    setCategories(params);
    setActiveTabs(value);
  }, []);

  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 6);

    scroll.scrollMore(350, {
      duration: 300,
      smooth: "easeInOutQuint",
    });
  };

  const handleDisplay = useCallback(() => {
    const filteredProducts =
      products?.filter((item) => categories.includes(item.category)) || [];
    const slicedProducts = filteredProducts.slice(0, limit);
    setTotalDisplay(filteredProducts.length);
    setDisplayProducts(slicedProducts);
  }, [products, categories, limit]);

  useEffect(() => {
    if (products) handleDisplay();
  }, [products, handleDisplay]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <Tabs value={activeTabs}>
          <TabsList className="w-full space-x-2 mb-4 bg-white">
            <TabsTrigger value="all_categories">
              <Button
                onClick={() => handleChanges(allCategories, "all_categories")}
                className={`${
                  activeTabs === "all_categories"
                    ? "bg-accent text-white"
                    : "bg-white text-secondary"
                }  border`}
              >
                All Products
              </Button>
            </TabsTrigger>
            <TabsTrigger value="mens_fashion">
              <Button
                onClick={() => handleChanges(mensFashion, "mens_fashion")}
                className={`${
                  activeTabs === "mens_fashion"
                    ? "bg-accent text-white"
                    : "bg-white text-secondary"
                }  border`}
              >
                Mens Fashion
              </Button>
            </TabsTrigger>
            <TabsTrigger value="womens_fashion">
              <Button
                onClick={() => handleChanges(womensFashion, "womens_fashion")}
                className={`${
                  activeTabs === "womens_fashion"
                    ? "bg-accent text-white"
                    : "bg-white text-secondary"
                }  border`}
              >
                Womens Fashion
              </Button>
            </TabsTrigger>
            <TabsTrigger value="electronics">
              <Button
                onClick={() => handleChanges(electronics, "electronics")}
                className={`${
                  activeTabs === "electronics"
                    ? "bg-accent text-white"
                    : "bg-white text-secondary"
                }  border`}
              >
                Electronics
              </Button>
            </TabsTrigger>
          </TabsList>
          <TabsContent value={activeTabs}>
            <div className="flex flex-wrap mb-4">
              {displayProducts.length === 0 ? (
                <div>Loading</div>
              ) : (
                displayProducts.map((item, index) => (
                  <div className="w-1/3 md:w-1/6 px-2 py-2" key={index}>
                    <div className="px-2 py-2 h-[250px] space-y-2 border rounded-md">
                      <div className="flex h-[150px] items-center justify-center">
                        <Image
                          width={150}
                          height={150}
                          className="bg-accent/20 rounded-md"
                          src={item.thumbnail}
                          alt="product"
                        />
                      </div>
                      <div className="flex flex-col h-[75px] justify-between">
                        <h1 className="text-sm">{item.title}</h1>
                        <span>$ {item.price}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {totalDisplay > displayProducts.length && (
              <div className="flex items-center justify-center">
                <Button onClick={loadMore} className="px-12">
                  Load More
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsList;
