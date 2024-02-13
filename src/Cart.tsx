import { useState } from "react";
import { CartType } from "./types/Cart";

interface CartProp{
    cart: CartType[];
    setCart: React.Dispatch<React.SetStateAction<CartType[]>>;
    setClickedItemIndex:(value:number|null)=>void;
}

function Cart({cart, setCart, setClickedItemIndex}: CartProp) {

    const [isCartVisible, setIsCartVisible] = useState(false);
  
    const deleteItem = (index: number) => {      
      //setCart([...cart.splice(index, 1)]);
      setCart([...cart.slice(0, index), ...cart.slice(index + 1)]); 

    };
  
    const viewCart = () => {
      setClickedItemIndex(null);
      setIsCartVisible(!isCartVisible);
    };
  
    return (
      <div>
        <button onClick={viewCart}>View Cart</button>
        {isCartVisible && cart.map((item, index) => (
          <div key={index}>
            <br />
            <li>
              {item.name} : {item.quantity}
              <button onClick={() => deleteItem(index)}>Delete</button>
            </li>
          </div>
        ))}
      </div>
    );
  }

  export default Cart;