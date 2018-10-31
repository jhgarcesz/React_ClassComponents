import React from "react";

import ProductsPage from "../components/ProductsPage";

import { getProducts } from "../api/productsAPI";

class ProductsPageContainer extends React.Component {
    constructor(...props) {
        super(...props);

        this.state = {
            items: []
        };
    }

    async componentDidMount() {
        const items = await getProducts();
        this.setState({ items });
    }

    render() {
        const { match: { params } } = this.props;
        return <ProductsPage items={this.state.items} category={params.category}  />;
    }
}

export default ProductsPageContainer;
