import React from "react";
import PropTypes from "prop-types";

const SimpleList = ({ items }) => (
  <ul className="my-app__simple-list">
    {items.map(item => (
      <li key={item.title} className="my-app__simple-list-item">
        <div>
          <h3>
            {item.title} <small>${item.price}</small>
          </h3>
          <p>{item.description}</p>
        </div>
      </li>
    ))}
  </ul>
);

SimpleList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  )
};

SimpleList.defaultProps = {
  items: []
};

export default SimpleList;
