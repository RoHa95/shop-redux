import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../features/product/productSlice";
import {useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  getInitialQueary,
  searchProducts,
} from "../helpers/helper";

import styles from "./ProductsPage.module.css";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

function ProductsPage(props) {
  
  const dispatch = useDispatch();
  const {products, loading} = useSelector((store) => store.product);
  console.log(products);
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQueary(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
        {loading && <Loader />}
        {displayed.map((product) => (
        <Card key={product.id} data={product} />
        ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
