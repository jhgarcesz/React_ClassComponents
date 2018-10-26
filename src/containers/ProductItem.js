import React from "react";

import ProductItem from "../components/ProductItem";


class ProductItemContainer extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            product: args.value
        };
    }

    render() {
        return <ProductItem detail={this.state.product} />;
    }
}

export default ProductItemContainer;
