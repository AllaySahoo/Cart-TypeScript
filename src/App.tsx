import { useState } from "react";
import { CartType } from "./types/Cart";

import Cart from "./Cart";
import Items from "./Items";

function App() {

  const [clickedItemIndex, setClickedItemIndex] = useState<number|null>(null);
  const [cart , setCart] = useState<CartType[]>([]);  
  const itemList = ['Bread', 'Milk', 'Butter', 'Jam', 'Egg'];  

  return (
    <div id="flexContainer">
      <div>
        <h2>Item List</h2>
        <hr /><br />
        <Items itemList = {itemList} clickedItemIndex = {clickedItemIndex} setClickedItemIndex = {setClickedItemIndex} cart = {cart} setCart = {setCart}/>
      </div>
      <div>
        <br /><br />
        <Cart cart = {cart} setCart = {setCart} setClickedItemIndex = {setClickedItemIndex}/>
      </div>
    </div>
  );
}

export default App;