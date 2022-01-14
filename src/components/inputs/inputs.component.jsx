import React from "react";
import "./inputs.style.css";

export function Inputs({ className, type, onChange, placeholder }) {
   return (
      <input
         className={(className, "input")}
         type={type}
         onChange={onChange}
         placeholder={placeholder}
      />
   );
}
