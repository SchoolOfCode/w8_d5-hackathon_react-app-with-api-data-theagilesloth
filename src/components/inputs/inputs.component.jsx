import React from "react";
import "./inputs.style.css";

export function Inputs({ className, type, onChange }) {
   return (
      <input className={(className, "input")} type={type} onChange={onChange} />
   );
}
