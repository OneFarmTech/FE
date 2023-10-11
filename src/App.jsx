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

const App = () => {
  const {userToken} = useSelector((state) => (state.register))

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
      element: !userToken ? <Navigate to='/auth/login' /> : <Dashboard />,
      children: [
        {
          path: 'home',
          element: <DashboardHome />
        },
        {
          path: 'profile',
          element: <Profile />
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
