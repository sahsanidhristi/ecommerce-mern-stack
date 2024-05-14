import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeBrand.css";
import shopbycat_1 from "../../../images/shopbycat-1.avif";
import shopbycat_2 from "../../../images/shopbycat-2.avif";
import shopbycat_3 from "../../../images/shopbycat-3.avif";
import shopbycat_4 from "../../../images/shopbycat-4.avif";
import shopbycat_5 from "../../../images/shopbycat-5.avif";
import shopbycat_6 from "../../../images/shopbycat-6.avif";
import shopbycat_7 from "../../../images/shopbycat-7.avif";
import shopbycat_8 from "../../../images/shopbycat-8.avif";
import shopbycat_9 from "../../../images/shopbycat-9.avif";
import shopbycat_10 from "../../../images/shopbycat-10.avif";
import shopbycat_11 from "../../../images/shopbycat-11.avif";
import shopbycat_12 from "../../../images/shopbycat-12.avif";
import shopbycat_13 from "../../../images/shopbycat-13.avif";
import shopbycat_14 from "../../../images/shopbycat_14.avif";
import shopbycat_15 from "../../../images/shopbycat-1.avif";
const homebrands = [
  {
    id: 1,
    image: shopbycat_1,
    path:'women/clothing/women_dress'
  },

  {
    id: 2,
    image: shopbycat_2,
    path:'men/clothing/t-shirt'
  },
  {
    id: 3,
    image: shopbycat_3,
    path:'women/clothing/women_jeans'
  },
  { id: 4, image: shopbycat_4 ,path:'men/clothing/men_jeans'},
  {
    id: 5,
    image: shopbycat_5,
    path:'women/clothing/women_dress'
  },
  {
    id: 6,
    image: shopbycat_6,
    path:'women/clothing/top'
  },
//   {
//     id: 7,
//     image: shopbycat_7,
//   },
  {
    id: 8,
    image: shopbycat_8,
  path:  'men/clothing/shirt'
  },
  {
    id: 9,
    image: shopbycat_9,
    path:'men/clothing/men_jeans'
  },

  {
    id: 10,
    image: shopbycat_10,
    path:'women/clothing/lengha_choli'
  },
//   {
//     id: 11,
//     image: shopbycat_11,
//   },
//   {
//     id: 12,
//     image: shopbycat_12,
//   },
//   {
//     id: 13,
//     image: shopbycat_13,
//   },
//   {
//     id: 14,
//     image: shopbycat_14,
//   },
//   {
//     id: 15,
//     image: shopbycat_15,
//   },
];
export default function HomeBrands() {
  const navigate=useNavigate();
  return (
    <>
      <div className="section-title">
        <h1>Shop by Category</h1>
      </div>
      <div className="categories">
        {homebrands.map((category) => (
          <div key={category.id} className="image-container">
<div onClick={()=>navigate(category.path)}>
              <img src={category.image} alt={category.name}  />
           </div>
          </div>
        ))}
      </div>
    </>
  );
}
