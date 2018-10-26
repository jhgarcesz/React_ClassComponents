import React from "react";

import ProductItem from "../components/ProductItem";


class ProductItemContainer extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      product: {id:"aeed54ce-36d8-42f6-8055-4c648c3bd4a1",name:"Generic Concrete Computer",description:"Voluptas vel numquam culpa aut non qui aliquam ut. Sequi corrupti ducimus ex officiis aperiam. Aspernatur ea nobis sit.",price:"275.00","brand":"Hirthe - Pacocha",stock:47905,photo:"http://lorempixel.com/640/480/nature",categories:["Tech","Services"]}
    };
  }

  render() {
    return <ProductItem detail={this.state.product} />;
  }
}

export default ProductItemContainer;
