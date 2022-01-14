import React, { useEffect, useState } from "react";
import "./results.style.css";
import { Card } from "../../components/card/card.component";

export function ResultsLayout({ className }) {
   useEffect(() => {
      const query = window.location.href.split("/")[4];
      const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${query}&image_type=photo&pretty=true`;
      const fetchData = async () => {
         const res = await fetch(url);
         const data = await res.json();
         console.log(data);
      };
      fetchData();
   });

   return (
      <div className={className} id="results">
         <Card
            className=""
            image={"/mountains-55067.png"}
            downloads={"100"}
            likes={"100"}
            views={"100"}
            photographer={"ozzyee"}
         />

         <Card
            className=""
            image={"/mountains-55067.png"}
            downloads={"100"}
            likes={"100"}
            views={"100"}
            photographer={"ozzyee"}
         />
      </div>
   );
}
