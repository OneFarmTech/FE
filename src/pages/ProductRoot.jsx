import { Outlet } from "react-router-dom";
import ProductsHeader from "../components/WaitingList/ProductsHeader";
import Footer from "../components/Footer";

const ProductRoot = () => (
  <>
    <ProductsHeader />

    <Outlet />
    <Footer />
  </>
);

export default ProductRoot;
