import Image from "next/image";
import styles from "./page.module.css"
import Carousel from "./components/Carousel";
import Test from "./components/Test";

import Products from "./components/Products";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <>
      <Carousel /> 
      {/* <Test /> */}  
      <Categories/>
      <Products/>
    </>
  );
}
