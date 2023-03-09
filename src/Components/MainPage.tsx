import React, { useState } from "react";
import HomePage from "./HomePage";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface cartitemstype{

  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;

}

const MainPage:React.FC = () => {
  const [cart, setCart] = useState<cartitemstype[]>([]);

  const handleDelete = (index:number) => {
    cart.splice(index, 1);
    setCart([...cart]);
  };
  return (
    <div>
      <Navbar cart={cart} handleDelete={handleDelete} />
      <HomePage cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
};

export default MainPage;
