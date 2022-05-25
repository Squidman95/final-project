import React from "react";
// import products from '../../Data/ProductData';
import Card from "../Card/Card";
import "./ShowResults.scss";

const SearchResult = (props) => {
    let { products = [] } = props;
    console.log('check5');
    console.log(products);

    return (
        <div className="ShowResults">
            
            <div className="ShowResults-Cards">
                {products.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            id={item.id}
                            image={item.image}
                            header={item.name}
                            subtext={item.shortDescription}
                            price={item.price}
                        />
                    );
                })}
            </div> 
            
        </div>
    );
};

export default SearchResult;
