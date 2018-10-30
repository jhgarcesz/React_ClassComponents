import React from "react";

import ProductList from "../components/ProductList";
import { getProducts } from "../api/simpleList";


class ProductListContainer extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            products: [],
            category: args[0].match.params.category
        };
    }

    async componentDidMount() {
        const products = await getProducts();
        this.setState({ products });
    }

    render() {
        return <ProductList products={this.filterProducts(this.state.products, this.state.category)} />;
    }

    filterProducts(products, category) {
        debugger
        if (typeof products !== 'undefined') {
            return products.filter(p => p.categories.includes(category));
        } else {
            return products;
        }
    }
}

export default ProductListContainer;
