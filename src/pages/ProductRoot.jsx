import { Outlet, ScrollRestoration } from "react-router-dom";
import ProductsHeader from "../components/WaitingList/ProductsHeader";
import Footer from "../components/Footer";

const ProductRoot = () => (
  <>
    <ScrollRestoration />
    <ProductsHeader />

    <Outlet />
    <Footer />
  </>
);

export default ProductRoot;
