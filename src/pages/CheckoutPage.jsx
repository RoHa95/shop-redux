import React from "react";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

import styles from "./CheckoutPage.module.css";
import { useSelector } from "react-redux";

function CheckoutPage(props) {
  // const [state, dispatch] = useCart();
  const state = useSelector(store=>store.cart);

  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p style={{ margin: "10px" }}>Empety!</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((p) => (
           <BasketCard key={p.id} data={p} /> 
         ))} 
      </div>
    </div>
  );
}

export default CheckoutPage;
