import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./app/pages/HomePage.tsx";
import BooksPage from "./app/pages/BooksPage.tsx";
import RootPage from "./app/pages/RootPage.tsx";
import CounterPage from "./app/pages/CounterPage.tsx";

const CustomRouter = createBrowserRouter([
  {
    path:"/",
    element: <RootPage />,
    children: [
      {
        path:"/Home",
        element: <HomePage />
      },
      {
          path:"/Books",
          element: <BooksPage />
      },
      {
        path:"/Counter",
        element: <CounterPage />
      }
    ]
  }
]);

const App = () => {
  return (
    <div>
      <h2>React Complete Tutorial</h2>
      <RouterProvider router = {CustomRouter} />
    </div>
  );
};

export default App;
