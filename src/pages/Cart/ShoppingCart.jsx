import { BsCheck2 } from "react-icons/bs";
import { useContext } from "react";
import CartContext from "../../context/cartContext";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart, totalPrice } =
    useContext(CartContext);
  return (
    <>
      {cart.length > 0 ? (
        <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Cart
          </h1>
          {/* products */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 my-8">
            <div className="col-span-3 border-b">
              {cart.map((item) => (
                <div key={item._id} className="flex gap-6 py-8 border-t">
                  <figure>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[96px] w-[96px] md:h-[192px] md:w-[192px] object-cover object-center"
                    />
                  </figure>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="grid grid-cols-2 items-start justify-between">
                      {/* Product details */}
                      <div className="flex flex-col gap-1">
                        <h3>{item.name}</h3>
                        <div className="flex gap-4 text-gray-500">
                          {/* <p>{item.color} </p> */}
                          {/* <p className="border-l pl-4">Large</p> */}
                        </div>
                        <p>{item.price}</p>
                      </div>
                      {/* Listbox */}
                      <div className="flex gap-4 items-center justify-between">
                        <div className="flex gap-1">
                          <button
                            className="px-3 border"
                            onClick={() => removeFromCart(item._id)}
                          >
                            -
                          </button>
                          <input
                            className="p-1 border outline-orange-400 w-16"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            className="px-3 border"
                            onClick={() => addToCart(item)}
                          >
                            +
                          </button>
                        </div>
                        {/* remove button */}
                        <button onClick={() => deleteFromCart(item._id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <div className="flex items-center gap-2">
                        <BsCheck2 className="text-green-500" />
                        <p>In stock</p>
                      </div>
                      <p>
                        <span className="font-medium">Subtotal Price:</span>$
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Checkout */}
            <div className="bg-[#F9FAFB] h-96 col-span-2 p-8 flex flex-col justify-between rounded">
              <h1 className="text-xl font-medium">Order summary</h1>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <p>Total Price</p> <p>{totalPrice()}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>Shipping estimate</p> <p>$5.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p className="text-lg font-medium">Order total</p>
                  <p>${(totalPrice() + 5).toFixed(2)}</p>
                </div>
              </div>
              <Link
                to="/payment"
                className="bg-orange-600 text-white text-lg text-center font-medium py-3 rounded w-full"
              >
                Checkout
              </Link>
            </div>
          </div>

          {/* suggest product */}
          {/* <SuggestProduct /> */}
        </section>
      ) : (
        <p className="flex justify-center mt-32 text-xl">No items in cart</p>
      )}
    </>
  );
};

export default ShoppingCart;
