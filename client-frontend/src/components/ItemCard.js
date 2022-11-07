import React, {useState, useEffect} from "react";

function ItemCard({ item }) {

  // const [addToCart, setAddToCart] = useState(false)
  // const [inCart, setInCart] = useState(false)

  // const handleAddToCart = () => {
  // const [inCart, setInCart] = useState(true)

  // fetch(`/items`, {
  //     method: 'PATCH',
  //     headers: {
  //       "Content-Type": 'application/json',
  //     },
  //     body: JSON.stringify(inCart)
  //   })
  //     .then(resp => resp.json())
  //     .then(item(inCart))


  // }
  // setInCart(inCart => !inCart)
  return (
    <li className="card">
      <img src={item.image_url} alt={"item name"} />
      <h4>{item.item_name}</h4>
      <p>Price: ${item.price}</p>
      <p>* {item.description} *</p>
      {/* {addToCart ? (
        <button className="primary" onClick={handleAddToCart}>Add To Cart</button>
      ) : (
        <button onClick={handleAddToCart}>Remove From Cart</button>
      )} */}
    </li>
  );
}

export default ItemCard;