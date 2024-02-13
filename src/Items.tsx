import { CartType } from "./types/Cart";

interface ItemsProps {
  itemList: string[];
  clickedItemIndex: number|null;
  cart: CartType[];
  setCart: React.Dispatch<React.SetStateAction<CartType[]>>;
  setClickedItemIndex: React.Dispatch<React.SetStateAction<number|null>>;
}

function Items({ itemList, cart, setCart, clickedItemIndex, setClickedItemIndex }: ItemsProps) {
  
  var newCartEntity : CartType = {
    name: "",
    quantity: 0
  };

  function setUserInput(quantity: number , item: string) {
    newCartEntity.name = item;
    newCartEntity.quantity = quantity;
  }

  function addToCart() {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.name === newCartEntity.name
    );

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity = newCartEntity.quantity;
    } else {
      updatedCart.push(newCartEntity);
    }

    setCart(updatedCart);
  }

  return (
    <>
      {itemList.map((item, index) => (
        <div key={index}>
          <li onClick={() => setClickedItemIndex(index)}>{item}</li>
          {clickedItemIndex === index && (
            <div>
              <input
                type="number"
                onChange={(e) => setUserInput(Number(e.target.value), item)}
              />
              <button onClick={addToCart}>Add To Cart</button>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Items;
