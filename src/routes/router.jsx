import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../pages/index";
export const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
      </Routes>
   );
};
