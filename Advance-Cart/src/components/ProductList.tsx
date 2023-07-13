// import { useDispatch } from "react-redux";
import { ProductType } from "../types/type";

const ProductList = ({ data }) => {
  //  const dispatch=useDispatch()
  //  const addTocart=(e)=>{
  //  e.preventDeafault()

  //  }

  return (
    <div
      className="mt-7 grid  px-2 md:px-5
    sm:grid-cols-2 grid-cols-1 md:grid-cols-3
    lg:grid-cols-4 mb-4
    xl:grid-cols-5 space-y-6 mx-auto gap-2"
    >
      {data.data?.map((item: ProductType) => {
        return (
          <div
            className="card-product w-[280px] h-[300px] flex  flex-col items-center "
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.image_title}
              className="h-[200px] w-[200px] object-cover"
            />
            <p className="text-sm text-center ">{item.name}</p>
            <div className="flex justify-between items-center mt-2 gap-10">
              <p className="text-sm  font-semibold ">(${item.price})</p>
              <button className="btn px-4 bg-red-400 text-white rounded-md cursor-pointer">
                Buy
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
