import React from "react";
import "./home.style.css";
import { Inputs } from "../../components/inputs/inputs.component";

export function HomeLayout({ className }) {
   return (
      <div className={className} id="home-section">
         <img id="home-image" src="/mountains-55067.png" alt="home" />
         <div id="input-wrapper">
            <Inputs className="input"/>
         </div>
      </div>
   );
}
