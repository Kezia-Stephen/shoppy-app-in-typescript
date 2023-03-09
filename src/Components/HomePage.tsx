import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Spinner from "./Spinner";
import ProductCards from "./ProductCards";

interface cartitemstype{

  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;

}

interface HomePagePropsType{
  cart : cartitemstype[];
  setCart: Dispatch<SetStateAction<cartitemstype[]>>;
}

const HomePage:React.FC<HomePagePropsType> = ({ cart, setCart })=> {
  // For cards
  const [data, setData] = useState<cartitemstype[]>([]);

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  // For loaders
  const [fetching, setFetching] = useState<boolean>(false);

  // For cart
  // const [cart, setCart] = useState([]);
  // const [count, setCount] = useState(0);

  const allCartIds:number[]= cart.map((x:cartitemstype) => x.id);

  const apiGet = () => {
    setFetching(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setData(json.products);
        setFetching(false);
      });
  };

  //   const prodArray = data.products;

  const handleClick = (cartItem:cartitemstype) => {
    setCart([...cart, cartItem]);
    // setItemsAvailability(true);
  };
  // console.log("Cart", cart);

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      {fetching ? (
        <Spinner />
      ) : (
        <ProductCards 
          data={data}
          handleClick={handleClick}
          allCartIds={allCartIds}
        />
      )}
    </div>
  );
};

export default HomePage;
