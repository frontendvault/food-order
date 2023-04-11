import { useEffect, useState } from "react";

import "./App.css";
import Shop from "./pages/shop";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import Header from "./components/header/Header";
// import { useGetAllProductsQuery } from "./features/slices/ApiSlice";

function App() {
  // const [meals, setMeals] = useState([]);
  // const url = "http://localhost:3000/products";

  // useEffect(() => {
  //   const mealItems = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setMeals(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   mealItems();
  // }, []);

  return (
    <div className="App p-0">
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Layout />}>
            <Route path="/" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <Header />
      <Shop />
    </div>
  );
}

export default App;
