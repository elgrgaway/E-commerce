import { useContext } from "react";
import History from "../common/History";
import CheckoutInputs from "../components/CheckoutInputs";
import CartContext from "../utils/StateContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CheckOut() {
  const { cart, setCart } = useContext(CartContext);
  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };
  const navigate = useNavigate();
  const orderHandler = (e) => {
    e.preventDefault();
    toast.success("Confirm Payment", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/");
    setCart([]);
    localStorage.removeItem("cart");
  };
  return (
    <div>
      <History page="cart / checkout" />
      <div className="w-[82%] m-auto  mb-[140px] ">
        <form
          onSubmit={orderHandler}
          className="flex gap-[170px] max-lg:flex-col max-lg:gap-20"
        >
          <CheckoutInputs />
          <div className="flex-1">
            {cart &&
              cart.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-8"
                >
                  <div className="flex items-center gap-6">
                    <img
                      className="w-12"
                      src={product.thumbnail}
                      alt={product.title}
                    />
                    <span>{product.title}</span>
                  </div>
                  <span>${product.price}</span>
                </div>
              ))}
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
            <div className="flex flex-col mt-8">
              <label htmlFor="bank" className=" flex items-center gap-4 mb-8">
                <input
                  type="radio"
                  name="payment"
                  id="bank"
                  className="h-6 w-6"
                  required
                />{" "}
                Bank
              </label>
              <label htmlFor="cash" className=" flex items-center gap-4 mb-8">
                <input
                  type="radio"
                  name="payment"
                  id="cash"
                  required
                  className="h-6 w-6"
                />{" "}
                Cash on delivery
              </label>
            </div>
            <div className="flex justify-between mb-12 ">
              <input
                type="text"
                className="border-2 rounded p-2 w-[300px]"
                placeholder="Coupon code"
              />
              <button className="bg-red-500 text-white px-12 py-4 rounded hover:opacity-80 transition-all cursor-not-allowed">
                Apply Coupon
              </button>
            </div>
            <button className="bg-red-500 text-white px-12 py-4 rounded hover:opacity-80 transition-all ">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CheckOut;
