import React from "react";
import "./card.style.css";

export function Card({
  className,
  image,
  views,
  likes,
  downloads,
  photographer,
}) {
  return (
    <div className={className}>
      <img src={image} alt={photographer}></img>
      <h2>{photographer}</h2>
      <div>
        <p>icon {views}</p>
      </div>
      <div>
        <p> icon {likes}</p>
      </div>
      <div>
        <p> icon {downloads}</p>
      </div>
    </div>
  );
}
