import React from "react";

import ProductsPage from "../components/ProductsPage";

import { getProducts } from "../api/simpleList";

class ProductsPageContainer extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    const items = await getProducts();
    this.setState({ items });
  }

  render() {
    return <ProductsPage items={this.state.items} />;
  }
}

export default ProductsPageContainer;
