import React, { useState, useEffect } from 'react';
import CartTable from '@components/CartTable';
import CartTotal from '@components/CartTotal';

export default function Cart() {
  const [showProducts, setShowProducts] = useState(true);
  const [products, setProducts] = useState([]);
  const [cost, setCost] = useState({});
  const [cartId, setCartId] = useState(null);

  useEffect(() => {
    const localCart = window.localStorage.getItem('astroCartId');

    let data;

    if (localCart === null) {
      setShowProducts(false);
    } else {
      setCartId(localCart);
      data = fetch(`${process.env.NETLIFY_URL}/.netlify/functions/get-cart`, {
        method: 'post',
        body: JSON.stringify({
          cartId: localCart,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          setProducts(response.cart.lines.edges);
          setCost(response.cart.estimatedCost);
          return response;
        });
    }
  }, []);

  return (
    <div>
      {showProducts ? (
        <div>
          Products
          <CartTable cartItems={products} cartId={cartId} />
          <CartTotal cost={cost} />
        </div>
      ) : (
        <div>No products to show! Get shopping!</div>
      )}
    </div>
  );
}
