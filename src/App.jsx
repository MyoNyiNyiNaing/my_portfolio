import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Loading from "./components/Loading/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div className=" font-Montserrat text-para">
      {loading ? <Loading /> : <Home />}
    </div>
  );
};

export default App;
