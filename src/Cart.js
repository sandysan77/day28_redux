import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems, incrementQuantity, decrementQuantity } from './store';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  useEffect(() => {
    // Simulate fetching data from an API
    const products = [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        quantity: 1,
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
      {
        id: 2,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        quantity: 1,
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      },
      {
        id: 3,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        quantity: 1,
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      },
      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        quantity: 1,
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      },
      {
        id: 5,
        title: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        quantity: 1,
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      },
    ];
    dispatch(setCartItems(products));
  }, [dispatch]);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div>
              <img src={item.thumbnail} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
              <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h2>Total Quantity: {totalQuantity}</h2>
        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
