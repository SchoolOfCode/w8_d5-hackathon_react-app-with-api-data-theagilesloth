import React, { useEffect } from "react";
import "./results.style.css";

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

   return <div className={className}>hello</div>;
}
