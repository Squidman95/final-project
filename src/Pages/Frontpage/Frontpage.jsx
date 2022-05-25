// import React from "react";
import React, { useEffect, useState } from "react";
// import Topbar from "../../Components/Topbar/Topbar";
import { getAllProducts } from "../../Service/ProductService";
// import Popup from "../../Components/Popup/Popup";
// import SearchResult from '../../Pages/SearchResultPage/SearchResultPage';
import ShowResults from "../../Components/ShowResults/ShowResults";
// import products from '../../Data/ProductData';
import OfferCarousel from "../../Components/OfferCarousel/OfferCarousel";
import NavbarController from "../../Components/Sidebar/NavbarController";
import "./Frontpage.scss";

const Frontpage = (props) => {
  // let { userId } = props;

  // console.log(`userId: ${userId}`);

  // const [visibility, setVisibility] = useState(true); // For the login/signup popup

  const [products, setProducts] = useState([]); // the reference (all products). Should not change
  const [filteredProducts, setFilteredProducts] = useState([]); // SHOULD BE THE SHOWN LIST

  // filter variables
  const [productsFilterMinPrice, setproductsFilterMinPrice] = useState(0);
  const [productsFilterMaxPrice, setproductsFilterMaxPrice] = useState(0);
  const [productsFilterAnimal, setproductsFilterAnimal] = useState(null);
  const [productsFilterCategory, setproductsFilterCategory] = useState(null);
  const [productsFilterSubCategory, setproductFilterSubCategory] = useState(null);


  useEffect(() => {
    getAllProducts().then(function (products) {
      setProducts(products);
      setFilteredProducts(products);
    });
  }, []);

  useEffect(() => {
    let localProducts = products;

    if (productsFilterMinPrice < productsFilterMaxPrice && productsFilterMinPrice >= 0 && productsFilterMaxPrice > 0) {
      if (productsFilterMinPrice !== null && productsFilterMinPrice !== undefined) {
        localProducts = getMinPriceFilteredItems(localProducts, productsFilterMinPrice);
        console.log('check6.1');
        console.log(localProducts);
      }

      if (productsFilterMaxPrice !== null && productsFilterMaxPrice !== undefined) {
        localProducts = getMaxPriceFilteredItems(localProducts, productsFilterMaxPrice);
        console.log('check6.2');
        console.log(localProducts);
      }
    }

    if (productsFilterAnimal !== null && productsFilterAnimal !== undefined) {
      localProducts = getNameFilteredItems(localProducts, productsFilterAnimal);
      console.log('check6.3');
      console.log(localProducts);
    }

    if (productsFilterCategory !== null && productsFilterCategory !== undefined) {
      localProducts = getCategoriesFilterItems(localProducts, productsFilterCategory);
      console.log('check6.4');
      console.log(localProducts);
    }

    if (productsFilterSubCategory !== null && productsFilterSubCategory !== undefined) {
      console.log('check6.5.1');
      console.log(productsFilterSubCategory);
      localProducts = getSubCategoriesFilterItems(localProducts, productsFilterSubCategory);
      console.log('check6.5');
      console.log(localProducts);
    }

    console.log('check6');
    console.log(localProducts);
    console.log('check7');
    setFilteredProducts(localProducts);
  }, [productsFilterMaxPrice, productsFilterMinPrice, productsFilterAnimal, productsFilterCategory, productsFilterSubCategory]);

  function getNameFilteredItems(products, animalName) {
    return products.filter((el) => {
      return animalName.some((e) => {
        return el.animal === e;
      })
    })

    /* 
    return products.filter(function (el) {
      return el.animal === animalName[1];
    })*/
  }

  function getCategoriesFilterItems(products, category) {
    /* console.log('check1');
    console.log(category);
    let test = products.filter(function (el) {
      return category.indexOf(el.category)
    })
    console.log('check2');
    console.log(test);
    return test; */

    return products.filter(function (el) {
      return el.category === category;
    })
  }

  function getSubCategoriesFilterItems(products, subcategory) {
    return products.filter(function (el) {
      return el.subcategory === subcategory;
    })
  }

  function getMinPriceFilteredItems(products, priceMin) {
    return products.filter(function (el) {
      return el.price >= priceMin;
    });
  }

  function getMaxPriceFilteredItems(products, priceMax) {
    return products.filter(function (el) {
      return el.price <= priceMax;
    });
  }

  /*  function getCategoriesFilterItems(products, category) {
     return products.filter(function (el) {
       return el.category === category;
     });
   } */

  /*  function getMinPriceFilteredItems(products, priceMin) {
     return products.filter(function (el) {
       return el.price >= priceMin;
     });
   } */



  return (
    <div className="Frontpage-Content">

      <div className="Frontpage-sidebarcontainer">
        <NavbarController
          FilterAnimal={setproductsFilterAnimal}
          FilterCategory={setproductsFilterCategory}
          FilterSubCategory={setproductFilterSubCategory}
          FilterMinPrice={setproductsFilterMinPrice}
          FilterMaxPrice={setproductsFilterMaxPrice}
        />
      </div>

      <div className="Frontpage-resultscontainer">
        <div
          style={{
            display: products.length === filteredProducts.length ? "block" : "none",
            // show the carousel only when no filter is applied
          }}
        >
          <OfferCarousel
            products={filteredProducts}
          />
        </div>
        <h2 style={{
          display: products.length === filteredProducts.length ? "none" : "block",
          // show 'search result' headline only when a filter has been applied
        }} >Search result:</h2>
        <ShowResults
          products={filteredProducts}
        />
      </div>

    </div>
  );
};


export default Frontpage;
