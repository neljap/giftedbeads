import {RouterProvider, createBrowserRouter, Routes, Route} from "react-router-dom";
import { AboutPg, CartPg, ContactPg, HomePg, ShopPg } from "./pages";
import {FaSun, FaMoon} from "react-icons/fa"
import { useTheme } from "next-themes";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { ToastContainer } from "react-toastify";

// https://bead-store-demo.myshopify.com/
const router = createBrowserRouter([{
  path: "*",
  Component: Root
}
])


function Root() {

  const { systemTheme, theme, setTheme } = useTheme();

  const themeBox = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <FaSun color="black" size={18}/>;
    } else {
      return <FaMoon color="white" size={18}/>;
    }
  };
useEffect(() =>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  })
  return (
    
    <div>
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="fixed top-1/2 right-20 cursor-pointer border border-primary rounded-full p-2 z-50 dark:bg-[#f1f1f1] bg-[#1f2937] shadow-2xl">
      {themeBox()}
    </div>
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/about" element={<AboutPg />} />
        <Route path="/contact" element={<ContactPg />} />
        <Route path="/cart" element={<CartPg />} />
        <Route path="/shop" element={<ShopPg />} />

      </Routes>
      <ToastContainer />
    </div>
  )
}

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App