// import { useState } from "react";
const Navbar = () => {
  //   const [open, setOpen] = useState(false);
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
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Navbar;
