import React, { PropTypes } from 'react';
import {
  ProductListIterator,
  ProductListLayout,
} from 'Templates/components';

/**
 * The product list widget component.
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const ProductListWidget = props => (
  <ProductListLayout>
    {props.products.map(
      product => <ProductListIterator {...product} display={props.flags} key={product.id} />
    )}
  </ProductListLayout>
);

ProductListWidget.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape()
  ).isRequired,
  flags: PropTypes.shape(),
};

ProductListWidget.defaultProps = {
  flags: {},
};

export default ProductListWidget;
