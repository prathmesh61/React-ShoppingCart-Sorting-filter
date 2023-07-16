import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { AppDispatch, ProductType } from "../types/type";
import { useEffect, useState } from "react";
import { fetchData } from "../redux/slice/dataSlice";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: any) => state.data);
  const [searchQuery, setSearchQuery] = useState("");

  // console.log(data);
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="flex flex-col ">
      <Navbar handleSearch={handleSearch} searchQuery={searchQuery} />
      <ProductList data={data} searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
