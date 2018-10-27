import React from "react";

import ProductPage from "../components/ProductPage";

import { getProducts } from "../api/simpleList";

class ProductPageContainer extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      items: [],
      category: args.location
    };
  }

  async componentDidMount() {
      debugger;
    console.log('location is ', this.state.category)
    const items = await getProducts();
    this.setState({ items });
  }

  render() {
    return <ProductPage items={this.state.items} />;
  }
}

export default ProductPageContainer;
