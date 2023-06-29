import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
])

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
