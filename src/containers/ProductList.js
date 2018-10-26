import React from "react";

import ProductList from "../components/ProductList";


class ProductListContainer extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            products: [
                {id:"aeed54ce-36d8-42f6-8055-4c648c3bd4a1",name:"Generic Concrete Computer",description:"Voluptas vel numquam culpa aut non qui aliquam ut. Sequi corrupti ducimus ex officiis aperiam. Aspernatur ea nobis sit.",price:"275.00","brand":"Hirthe - Pacocha",stock:47905,photo:"http://lorempixel.com/640/480/nature",categories:["Tech","Services"]},
                {"id":"2ad52ed8-77d7-4072-ad86-42b1c3517c66","name":"Intelligent Rubber Soap","description":"Quia temporibus excepturi expedita. Neque aut sed deleniti voluptatum cupiditate quia aut. Illo hic molestias et ullam dolorum id perspiciatis voluptatem. Consequatur quia eaque vero.","price":"924.00","brand":"Hane LLC","stock":56717,"photo":"http://lorempixel.com/640/480/people","categories":["Tech","Office"]}
            ]
        };
    }

    render() {
        return <ProductList products={this.state.products} />;
    }
}

export default ProductListContainer;
