import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FarmerSolution from "./pages/FarmerSolution";
import RetailSolution from "./pages/RetailSolution";
import MiddleSolution from "./pages/MiddleSolution";
import AuthRoot from "./pages/AuthRoot";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import Kyc from "./pages/Kyc";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import WaitingList from "./pages/WaitingList";
import Products from "./pages/Products";
import ProductRoot from "./pages/ProductRoot";
import MarketPlace from "./pages/MarketPlace";
import NewProduct from "./pages/NewProduct";
import RetailMarketplace from "./pages/RetailMarketplace";
import ViewProduct from "./pages/ViewProduct";
import Cart from "./pages/Cart";

const App = () => {
  const {userToken} = useSelector((state) => (state.register));

  const router1 = createBrowserRouter([
    {
      path: '/',
      element: <WaitingList />
    },
    {
      path: 'app',
      element: <ProductRoot />,
      children: [
        {
          path: 'products',
          element: <Products />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        },
      ]
    }
  ])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'solution/farmer',
          element: <FarmerSolution />
        },
        {
          path: 'solution/retail',
          element: <RetailSolution />
        },
        {
          path: 'solution/middlemen',
          element: <MiddleSolution />
        }
      ]
    },
    {
      path: '/auth',
      element: userToken ? <Navigate to='/dashboard/home' /> : <AuthRoot />,
      children: [
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <Signup />
        },
        {
          path: 'kyc',
          element: <Kyc />
        }
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      children: [
        {
          path: 'home',
          element: <DashboardHome />
        },
        {
          path: 'profile',
          element: <Profile />
        },
        {
          path: 'marketplace',
          element: <MarketPlace />
        },
        {
          path: 'retailmarketplace',
          element: <RetailMarketplace />
        },
        {
          path: 'new',
          element: <NewProduct />
        },
        {
          path: 'viewproduct',
          element: <ViewProduct />
        },
        {
          path: 'cart',
          element: <Cart />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
