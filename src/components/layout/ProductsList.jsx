import { getProducts } from "@/lib/features/action/productsAction";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

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
  const [filterProducts, setFilterProducts] = useState([]);
  const [activeTabs, setActiveTabs] = useState("all_products");
  const [limit, setLimit] = useState(8);
  const products = useSelector((state) => state.products.products);

  const fetchProducts = () => {
    dispatch(getProducts(12));
  };

  const handleFilter = (filterParams, value = "all_products") => {
    setActiveTabs(value);
    if (!filterParams) {
      setFilterProducts(products);
    } else {
      console.log("success");
      const filtered = products.filter((item) =>
        filterParams.includes(item.categories)
      );
      setFilterProducts(filtered);
    }
  };

  useEffect(() => {
    if (products) {
      handleFilter();
    }
  }, [products]);

  useEffect(() => {
    fetchProducts();
  }, [dispatch, limit]);

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <Tabs defaultValue={activeTabs}>
          <TabsList className="w-full space-x-2 bg-white">
            <TabsTrigger value="all_products" className="bg-white border">
              <button onClick={() => handleFilter(mensFashion, "all_products")}>
                all products
              </button>
            </TabsTrigger>
            <TabsTrigger value="mens_fashion" className="bg-white border">
              <button onClick={() => handleFilter(mensFashion, "mens_fashion")}>
                Mens Fashion
              </button>
            </TabsTrigger>
            <TabsTrigger value="sepatu" className="bg-white border">
              <button>Womens Fashion</button>
            </TabsTrigger>
            <TabsTrigger value="jam tangan" className="bg-white border">
              Jam Tangan
            </TabsTrigger>
          </TabsList>
          <TabsContent value={activeTabs}>
            <div className="flex flex-wrap">
              {filterProducts?.length === 0 ? (
                <div>Loading</div>
              ) : (
                filterProducts.map((item, index) => {
                  return (
                    <div className="w-1/3 md:w-1/6 px-2 py-2" key={index}>
                      <div className="px-2 py-2 h-[250px] space-y-2 border rounded-md">
                        <div className="flex h-[150px] items-center justify-center">
                          <img
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
                  );
                })
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsList;
