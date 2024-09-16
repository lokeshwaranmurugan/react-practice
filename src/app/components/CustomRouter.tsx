import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import BooksPage from "../pages/BooksPage";


const CustomRouter = createBrowserRouter([
    {
        path:"/",
        element: <HomePage />
    },
    {
        path:"/Books",
        element: <BooksPage />
    }
]);



export default CustomRouter;
