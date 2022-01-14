import React from "react";
import "./card.style.css";
import { AiFillEye, AiTwotoneLike, AiOutlineDownload } from "react-icons/ai";

export function Card({
   className,
   image,
   views,
   likes,
   downloads,
   photographer,
}) {
   return (
      <div className={className} id="card-wrapper">
         <img src={image} alt={photographer} id="image"></img>
         <h2>{photographer}</h2>

         <div id="info">
            <div div className="about-img">
               <p>
                  <AiFillEye />
                  {views}
               </p>
            </div>

            <div className="about-img">
               <AiTwotoneLike />
               <p>{likes}</p>
            </div>

            <div className="about-img">
               <AiOutlineDownload />
               <p>{downloads}</p>
            </div>
         </div>
      </div>
   );
}
