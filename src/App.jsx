import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/components/Page/Home";
import Cart from "./assets/components/Page/Cart";
import Exam from "./assets/components/Exam";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
    </>
  );
}

export default App;
