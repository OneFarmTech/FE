import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FarmerSolution from "./pages/FarmerSolution";
import RetailSolution from "./pages/RetailSolution";
import MiddleSolution from "./pages/MiddleSolution";
import WaitingList from "./pages/WaitingList";

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
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
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
    path: '/waitinglist',
    element: <WaitingList />
  }
])

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
