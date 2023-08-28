import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Bookings from "../pages/Bookings/Bookings";
import CallService from "../pages/CallService/CallService";
import HomePage from "../pages/Home/Home";
import AboutUs from "../pages/About/AboutUs";
import ContactUs from "../pages/Contact/ContactUs";
import CarServicesPkg from "../pages/Services/Car/CarServicesPkg";
import BikeServicesPkg from "../pages/Services/Bike/BikeServicePkg";
import CarServiceDetails from "../pages/Services/ServiceDetails";
import ProductItem from "../pages/Products/ProductItem";
import ErrorPage from "../pages/Error/Error";
import Products from "../pages/Products/Products";
import ShoppingCart from "../pages/Cart/ShoppingCart";
import AppointmentForm from "../pages/Bookings/BookNow";
import PrivateRoute from "./PrivateRoutes";
import Payment from "../pages/Payment/Payment";
import MyCallService from "../pages/CallService/MyCallService";
import ServiceDetails from "../pages/Services/ServiceDetails";
import PaymentHistory from "../pages/Payment/PaymentHistory";
import PaymentStatus from "../pages/Payment/PaymentStatus";
import AddProductForm from "../pages/Admin/AddProductForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "car-services-pkg",
        element: <CarServicesPkg />,
      },
      {
        path: "bike-services-pkg",
        element: <BikeServicesPkg />,
      },
      {
        path: "service-details/:id",
        element: <ServiceDetails />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductItem />,
      },

      {
        path: "cart",
        element: <ShoppingCart />,
      },
      {
        path: "call-service",
        element: (
          <PrivateRoute>
            <CallService />
          </PrivateRoute>
        ),
      },
      {
        path: "mycall-service",
        element: (
          <PrivateRoute>
            <MyCallService />
          </PrivateRoute>
        ),
      },
      {
        path: "appointment",
        element: (
          <PrivateRoute>
            <AppointmentForm />
          </PrivateRoute>
        ),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "payment-status",
        element: (
          <PrivateRoute>
            <PaymentStatus />
          </PrivateRoute>
        ),
      },
      {
        path: "About-us",
        element: <AboutUs />,
      },
      {
        path: "Contact-us",
        element: <ContactUs />,
      },
      {
        path: "admin/add-product",
        element: <AddProductForm />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
