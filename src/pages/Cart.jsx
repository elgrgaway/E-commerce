import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import History from "../common/History";
import CartContext from "../utils/StateContext";

function Cart() {
  const [cart1, setCart] = useState([]);
  const { cart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    setCart(cart);
  }, [cart]);

  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateCartItemQuantity = (index, delta) => {
    const updatedCart = [...cart1];
    updatedCart[index].quantity = Math.max(
      1,
      updatedCart[index].quantity + delta
    );
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
  };

  // const deleteHandler = (index) => {
  //   const newCart = cart.filter((p, i) => index !== i);
  //   setCart(newCart);
  //   localStorage.setItem("cart", JSON.stringify(newCart));
  // };

  const calculateTotal = () => {
    return cart1
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <History page="Cart" />
      <div className="w-[82%] mx-auto mb-[140px] max-lg:w-[90%]">
        {cart1.length > 0 ? (
          <>
            <div className=" overflow-table ">
              <table className="w-full min-w-[600px] text-left table-auto mb-6">
                <thead>
                  <tr className="py-7 px-10 shadow">
                    <th className="py-7 pl-10">Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart1.map((product, index) => (
                    <tr key={index} className="py-7 px-10 shadow">
                      <td className="pl-10 max-w-[180px] relative">
                        <button
                          onClick={() => removeFromCart(index)}
                          className="absolute left-8 bg-red-500 flex items-center justify-center text-[10px] rounded-full top-5 hover:bg-red-700 transition-all"
                        >
                          <i className="fa-solid fa-x text-white px-2 py-2"></i>
                        </button>
                        <div className="flex items-center gap-4">
                          <img
                            className="w-[50px]"
                            src={product.thumbnail}
                            alt={product.title}
                          />
                          <Link
                            to={`/all-products/${product.id}`}
                            className=" hover:text-[var(--red-color)] transition-all"
                          >
                            {product.title}
                          </Link>
                        </div>
                      </td>
                      <td className="w-[100px]">${product.price}</td>
                      <td className=" w-[100px]">
                        <div className="w-[72px] flex gap-4 items-center justify-center px-3 py-1.5 my-7 border-2 rounded">
                          <span>{product.quantity}</span>
                          <div className="flex flex-col items-center">
                            <button
                              onClick={() => updateCartItemQuantity(index, 1)}
                              className="text-2xl"
                            >
                              <img src="Drop-Up-Small.png" alt="arrow up" />
                            </button>
                            <button
                              onClick={() => updateCartItemQuantity(index, -1)}
                              className="text-2xl"
                            >
                              <img src="Drop-Down-Small.png" alt="arrow down" />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="w-[100px]">
                        ${(product.price * product.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between mb-20 ">
              <Link
                to="/"
                className="border-2 rounded px-12 py-4 hover:bg-slate-400 hover:border-slate-400 transition-all hover:text-white"
              >
                Return To Shop
              </Link>
              <button
                className="border-2 rounded px-12 py-4 hover:bg-slate-400 hover:border-slate-400 transition-all hover:text-white"
                onClick={() => window.location.reload()}
              >
                Update Cart
              </button>
            </div>
            <div className="flex items-start justify-between gap-8 max-md:flex-col-reverse max-md:items-center">
              <div className="flex gap-4 ">
                <input
                  type="text"
                  className="border-2 rounded p-2 w-[300px]"
                  placeholder="Coupon code"
                />
                <button className="bg-red-500 text-white px-12 py-4 rounded hover:opacity-80 transition-all cursor-not-allowed">
                  Apply Coupon
                </button>
              </div>
              <div className="w-[470px] border-2 rounded py-8 px-6">
                <span className="mb-6 text-xl font-medium">Cart Total</span>
                <div className="flex justify-between border-b-2 py-4">
                  <span>Subtotal:</span>
                  <span className="font-medium">${calculateTotal()}</span>
                </div>
                <div className="flex justify-between border-b-2 py-4">
                  <span>Shipping:</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between py-4">
                  <span>Total:</span>
                  <span className="font-medium">${calculateTotal()}</span>
                </div>
                <button className="bg-red-500 text-white py-4 rounded hover:opacity-80 transition-all block w-3/4 mx-auto">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="mb-[140px] text-center">
            <p className="text-3xl mb-4">Cart is empty</p>
            <Link to="/" className="text-red-500">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
