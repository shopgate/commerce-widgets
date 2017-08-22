import React, { PropTypes } from 'react';
import {
  ProductGridIterator,
  ProductGridLayout,
} from 'Templates/components';

/**
 * The product grid widget component.
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const ProductGridWidget = props => (
  <ProductGridLayout>
    {props.products.map(
      product => <ProductGridIterator {...product} display={props.flags} key={product.id} />
    )}
  </ProductGridLayout>
);

ProductGridWidget.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape()
  ).isRequired,
  flags: PropTypes.shape(),
};

ProductGridWidget.defaultProps = {
  flags: {},
};

export default ProductGridWidget;
