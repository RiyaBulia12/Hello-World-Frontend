import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import getGreetings from "./redux/api";


const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  const greet = useSelector((state) => state.greeting);
  return (
    <div>
      <h1>Hey, {greet.text}</h1>
    </div>
  );
}

export default Greeting;
