import React from "react";

import SimpleList from "../components/SimpleList";

import { getItems } from "../api/simpleList";

class SimpleListContainer extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    const items = await getItems();
    this.setState({ items });
  }

  render() {
    return <SimpleList items={this.state.items} />;
  }
}

export default SimpleListContainer;
