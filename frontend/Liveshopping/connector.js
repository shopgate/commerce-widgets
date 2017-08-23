/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import connect from '@shopgate/pwa-common/helpers/routedConnect';
import getLiveshoppingProducts from '@shopgate/pwa-common-commerce/product/actions/getLiveshoppingProducts';
import { getProductsResult } from './selectors';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  products: getProductsResult(state).products,
});

/**
 * Connects the dispatch function to a callable function in the props.
 * @param {Function} dispatch The redux dispatch function.
 * @param {Object} props The component props.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  getLiveshoppingProducts: () => dispatch(getLiveshoppingProducts()),
});

/**
 * Connects a component to the liveshopping product store.
 * @param {Object} Component A react component.
 * @return {Object} The react component with extended props.
 */
const liveshopping = Component =>
  connect(mapStateToProps, mapDispatchToProps)(Component)
;

export default liveshopping;
