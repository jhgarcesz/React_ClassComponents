import React from "react";

import ProductList from "../components/ProductList";


class ProductListContainer extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            products: arg.value
        };
    }

    render() {
        return <ProductList products={this.state.products} />;
    }
}

export default ProductListContainer;
