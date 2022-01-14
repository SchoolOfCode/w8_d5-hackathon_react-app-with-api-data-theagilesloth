import React, { useState, useEffect } from "react";
import "./home.style.css";
import { Inputs } from "../../components/inputs/inputs.component";
import { Buttons } from "../../components/buttons/buttons.component";
import { Routes, Route, Link } from "react-router-dom";

export function HomeLayout({ className }) {
   const [searchValue, setSearchValue] = useState("");
   const [disabled, setDisabled] = useState(false);

   return (
      <div className={className} id="home-section">
         <img id="home-image" src="/mountains-55067.png" alt="home" />
         <div id="overlay" />
         <div id="input-wrapper">
            <h1>Search for Your Next Image</h1>
            <Inputs
               className="input"
               onChange={(evt) => setSearchValue(evt.target.value)}
               placeholder="Search"
            />

            <div id="btn-wrapper">
               <Buttons className="search-btn" onClick={() => {}}>
                  <Link
                     className="link"
                     to={disabled ? `/results/${searchValue}` : "#"}
                  >
                     search
                  </Link>
               </Buttons>
            </div>
         </div>
      </div>
   );
}
