import React, { useEffect, useState } from "react";
import "./results.style.css";
import { Card } from "../../components/card/card.component";

export function ResultsLayout({ className }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const query = window.location.href.split("/")[4];
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${query}`;
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setImages(data.hits);
    };

    console.log(process.env.REACT_APP_API_KEY);
    fetchData();
  });

  return (
    <div className={className} id="results">
      {images.map((image) => {
        return <Card image={image} key={image.id} />;
      })}
    </div>
  );
}
