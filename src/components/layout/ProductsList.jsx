import { getProducts } from "@/lib/features/action/productsAction";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

const ProductsList = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(8);
  const products = useSelector((state) => state.products.products);

  const fetchProducts = () => {
    dispatch(getProducts(12));
  };

  useEffect(() => {
    fetchProducts();
  }, [dispatch, limit]);

  console.log(products);
  return (
    <section className="py-6">
      <div className="container mx-auto">
        <Tabs defaultValue="all_products">
          <TabsList className="w-full space-x-2 bg-white">
            <TabsTrigger value="all_products" className="bg-white border">
              All Products
            </TabsTrigger>
            <TabsTrigger value="pakaian" className="bg-white border">
              Pakaian
            </TabsTrigger>
            <TabsTrigger value="sepatu" className="bg-white border">
              Sepatu
            </TabsTrigger>
            <TabsTrigger value="jam tangan" className="bg-white border">
              Jam Tangan
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all_products">
            {/* <div className="flex flex-wrap">
              {products?.length === 0 ? (
                <div>Loading</div>
              ) : (
                products.map((item, index) => {
                  return (
                    <div className="w-1/3 md:w-1/6" key={index}>
                      <div className="px-2 py-2 border rounded-md">
                        <div>{item.title}</div>
                      </div>
                    </div>
                  );
                })
              )}
            </div> */}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsList;
