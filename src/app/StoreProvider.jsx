"use client";

import store from "@/lib/store";
import { Provider } from "@radix-ui/react-tooltip";

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
