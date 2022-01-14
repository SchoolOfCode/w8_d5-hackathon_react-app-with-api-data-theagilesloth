import React, { useState } from "react";
import "./home.style.css";
import { Inputs } from "../../components/inputs/inputs.component";
import { Buttons } from "../../components/buttons/buttons.component";

export function HomeLayout({ className }) {
   const [searchValue, setSearchValue] = useState("");

   const onSearch = () => {
      document.location.href = `/results/${searchValue}`;
   };

   return (
      <div className={className} id="home-section">
         <img id="home-image" src="/mountains-55067.png" alt="home" />
         <div id="input-wrapper">
            <Inputs
               className="input"
               onChange={(evt) => setSearchValue(evt.target.value)}
            />
            <Buttons onClick={onSearch}>Search</Buttons>
         </div>
      </div>
   );
}
