/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import ProductGridIterator from 'Components/ProductGridIterator';
import ProductGridLayout from 'Components/ProductGridLayout';

/**
 * The product grid widget component.
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const ProductGridWidget = pure(({ products, flags }) => (
  <ProductGridLayout>
    {products.map(product =>
      <ProductGridIterator {...product} display={flags} key={product.id} />
    )}
  </ProductGridLayout>
));

ProductGridWidget.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  flags: PropTypes.shape(),
};

ProductGridWidget.defaultProps = {
  flags: {},
};

export default ProductGridWidget;
