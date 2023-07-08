import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "./redux/slice/dataSlice";
import { AppDispatch } from "./types/type";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: any) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log(data);
  return <div>App</div>;
};

export default App;
