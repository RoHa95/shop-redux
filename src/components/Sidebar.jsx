import React from "react";
import { createQueryObject } from "../helpers/helper";
import { categories } from "../constant/list";

import { FaListUl } from "react-icons/fa";

import styles from "./Sidebar.module.css";

function Sidebar({ query, setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    console.log(e.target.innerText);
    const category = e.target.innerText.toLowerCase();

    console.log(tagName);
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
        {/* <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li> */}
      </ul>
    </div>
  );
}

export default Sidebar;
