import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { AppDispatch } from "../types/type";
import { useEffect } from "react";
import { fetchData } from "../redux/slice/dataSlice";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: any) => state.data);
  console.log(data);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="flex flex-col ">
      <Navbar />
      <ProductList data={data} />
    </div>
  );
};

export default Home;
