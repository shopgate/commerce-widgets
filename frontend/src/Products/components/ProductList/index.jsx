/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import ProductListIterator from 'Components/ProductListIterator';
import ProductListLayout from 'Components/ProductListLayout';

/**
 * The product list widget component.
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const ProductListWidget = pure(({ products, flags }) => (
  <ProductListLayout>
    {products.map(product =>
      <ProductListIterator {...product} display={flags} key={product.id} />
    )}
  </ProductListLayout>
));

ProductListWidget.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  flags: PropTypes.shape(),
};

ProductListWidget.defaultProps = {
  flags: {},
};

export default ProductListWidget;
