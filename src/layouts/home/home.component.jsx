import React, { useState } from "react";
import "./home.style.css";
import { Inputs } from "../../components/inputs/inputs.component";
import { Buttons } from "../../components/buttons/buttons.component";

export function HomeLayout({ className }) {
   const [searchValue, setSearchValue] = useState("");

   const onSearch = () => {
      document.location.href = `/results/${searchValue}`;
   };

   const onImFeelingLuck = () => {
      const query = window.location.href.split("/")[4];
      const url = `https://random-word-api.herokuapp.com/word?number=1`;
      const fetchData = async () => {
         const res = await fetch(url);
         const data = await res.json();
         document.location.href = `/results/${data[0]}`;
      };
      fetchData();
   };

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
               <Buttons onClick={onSearch} className="search-btn">
                  Search
               </Buttons>

               <Buttons onClick={onImFeelingLuck} className="search-btn">
                  Im Feeling lucky
               </Buttons>
            </div>
         </div>
      </div>
   );
}
