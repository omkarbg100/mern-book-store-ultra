import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import CartPage from "../pages/Book/CartPage.jsx";
import CheckoutPage from "../pages/Book/CheckOutPage.jsx";
import SingleBook from "../pages/Book/SingleBook.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import OrderPage from "../pages/Book/Orderpage.jsx";
import AdminRoute from "./AdminRoute.jsx";
import AdminLogin from "../components/AdminLogin.jsx";
import DashboardLayout from "../pages/dashboard/DashboardLayout.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks.jsx";
import AddBook from "../pages/dashboard/addBook/AddBook.jsx";
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook.jsx";
import UserDashboard from "../pages/dashboard/users/UserDashboard.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/> ,
        children: [
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/orders",
                element: <PrivateRoute><OrderPage/></PrivateRoute>
            },
            {
                path:"/about",
                element: <div>about</div>
            },
            {
                path:"/cart",
                element: <CartPage/>
            },
            {
                path:"/login",
                element: <Login/>
            },
            {
                path:"/register",
                element: <Register/>
            },
            {
                path:"/checkout",
                element: <PrivateRoute><CheckoutPage/></PrivateRoute>
            },
            {
                path: "/books/:id",
                element: <SingleBook/>
              },
              {
                path: "/user-dashboard",
                element: <PrivateRoute><UserDashboard/></PrivateRoute>
              }

        ]
    },
    {
        path: "/admin",
        element: <AdminLogin/>
      },
    {
        path: "/dashboard",
        element: <AdminRoute>
          <DashboardLayout/>
        </AdminRoute>,
        children:[
          {
            path: "",
            element: <AdminRoute><Dashboard/></AdminRoute>
          },
          {
            path: "add-new-book",
            element: <AdminRoute>
              <AddBook/>
            </AdminRoute>
          },
          {
            path: "edit-book/:id",
            element: <AdminRoute>
              <UpdateBook/>
            </AdminRoute>
          },
          {
            path: "manage-books",
            element: <AdminRoute>
              <ManageBooks/>
            </AdminRoute>
          }
        ]
      }
]);

export default router;