import { useDispatch, useSelector } from "react-redux";
import { ProductType } from "../types/type";
import {
  decrementProduct,
  incrementProduct,
  removerProduct,
} from "../redux/slice/CartSlice";

// import { useState } from "react";
const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = products.map((item) => {
    item.price * item.quantity;
  });

  return (
    <div className="flex justify-between items-center px-2y h-16">
      <div className="flex items-cente font-bold text-lg">CartiFy</div>
      <div className="flex items-center w-[80%]">
        <input
          type="text"
          name="text"
          className="w-full bg-gray-200 border-none outline-none rounded-lg p-1 shadow-md"
          placeholder="Search..."
        />
      </div>

      <button
        className="btn bg-blue-500 text-white px-4 py-1 rounded-lg"
        onClick={() => window.my_modal_1.showModal()}
      >
        Shopping cart
      </button>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn px-4 bg-red-400 text-white rounded-md cursor-pointer text-left mb-2 ">
            X
          </button>

          {products?.map((prod: ProductType) => (
            <>
              <div className="flex gap-4 items-center mt-4" key={prod.id}>
                <img
                  src={prod.image}
                  alt={prod.image_title}
                  className="w-[100px] h-[120px] object-cover"
                />

                <div className="flex flex-col justify-center items-start gap-2 w-[70%]">
                  <p className="text-lg font-bold">{prod.name}</p>
                  <p className="text-sm w-[70%] ">{prod.description}</p>
                  <p className="text-lg font-semibold">
                    ( ${prod.price} X {prod.quantity})
                  </p>
                </div>
                <div className="flex flex-col justify-start items-center gap-2">
                  <div className="flex justify-start items-start gap-1">
                    <button
                      className=" bg-blue-500 text-white px-2  rounded-xl"
                      onClick={() => dispatch(incrementProduct(prod))}
                    >
                      +
                    </button>
                    <p className="text-lg font-bold">{prod.quantity}</p>
                    <button
                      className=" bg-red-500 text-white px-2  rounded-xl"
                      onClick={() => dispatch(decrementProduct(prod))}
                    >
                      -
                    </button>
                  </div>
                  <button
                    className=" bg-red-500 text-white px-2 text-sm rounded-md"
                    onClick={() => dispatch(removerProduct(prod))}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-end items-center mt-4 font-bold text-lg ">
                <p>Total: ${Number(prod.price) * prod.quantity}</p>
              </div>
            </>
          ))}
        </form>
      </dialog>
    </div>
  );
};

export default Navbar;
