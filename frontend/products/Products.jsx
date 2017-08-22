import React, { Component, PropTypes } from 'react';
import connect from 'Library/connectors';
import { I18n } from 'Library/components';
import isEqual from 'lodash/isEqual';
import { transformDisplayOptions } from 'Library/helpers/data';
import {
  GRID_VIEW,
  LIST_VIEW,
} from 'Library/constants/DisplayOptions';
import {
  ActionButton,
  Headline,
} from 'Templates/components';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';
import styles from './Products.style';

/**
 * The product widget component.
 */
export class ProductsWidget extends Component {
  static propTypes = {
    getProducts: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    settings: PropTypes.shape().isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape()
    ),
    totalProductCount: PropTypes.number,
  };

  static defaultProps = {
    getProducts: () => {},
    products: null,
    totalProductCount: null,
  }

  /**
   * The constructor
   * @param {Object} props The component props.
   */
  constructor(props) {
    super(props);

    this.productCount = props.products.length;

    this.state = {
      fetching: false,
    };
  }

  /**
   * Request the products when the component mounts.
   */
  componentDidMount() {
    if (this.props.products.length === 0) {
      this.loadProducts();
    }
  }

  /**
   * When we receive new products then we can adjust the state.
   * @param {Object} nextProps The next set of component props.
   */
  componentWillReceiveProps(nextProps) {
    // Set the total product count.
    this.totalProductCount = nextProps.totalProductCount;

    /**
     * Only update to stop 'fetching' when we receive new products or
     * if we have received all expected products.
     */
    if (
      this.props.products.length !== nextProps.products.length ||
      nextProps.products.length === this.totalProductCount
    ) {
      this.productCount = Math.min(nextProps.products.length, this.totalProductCount);

      this.setState({
        fetching: false,
      });
    }
  }

  /**
   * Only update when we are fetching products or we have new products.
   * @param {Object} nextProps The next set of component props.
   * @param {Object} nextState The next component state..
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.fetching !== nextState.fetching ||
      (nextProps.products && !isEqual(this.props.products, nextProps.products))
    );
  }

  /**
   * Build the params for requesting products and then make the request.
   * @param {number} offset The offset for the product request.
   */
  getProducts = () => {
    const { getProducts, id } = this.props;
    const { productLimit, queryParams, queryType } = this.props.settings;

    const sort = transformDisplayOptions(this.props.settings.sortOrder);

    const options = {
      limit: productLimit,
      offset: this.productCount,
      sort,
    };

    getProducts(queryType, queryParams, options, id);
  }

  /**
   * Set the state accordingly and then call getProducts().
   */
  loadProducts = () => {
    this.setState({
      fetching: true,
    }, this.getProducts);
  }

  /**
   * Determines whether or not we already have all products.
   * @returns {boolean}
   */
  hasAllProducts = () => (
    this.props.totalProductCount !== null &&
    this.props.products.length >= this.props.totalProductCount
  );

  /**
   * Renders a 'Load More' button if there are more products to load.
   * @returns {JSX}
   */
  renderMoreButton = () => {
    if (
      !this.props.settings.showLoadMore ||
      this.hasAllProducts()
    ) {
      return null;
    }

    return (
      <ActionButton
        loading={this.state.fetching}
        onClick={this.loadProducts}
      >
        <I18n.Text string="product.load_more" />
      </ActionButton>
    );
  };

  /**
   * The render function.
   * @returns {JSX}
   */
  render() {
    const { products } = this.props;

    // Don't render if we don't have any products.
    if (!products || !products.length) {
      return null;
    }

    // Only show the number of products that we want, not everything coming via props.
    const productSlice = products.slice(0, this.productCount);
    const {
      headline,
      layout,
      showName,
      showPrice,
      showReviews,
    } = this.props.settings;
    const flags = {
      name: showName,
      price: showPrice,
      reviews: showReviews,
    };

    if (layout === GRID_VIEW) {
      return (
        <div>
          <Headline text={headline} />
          <ProductGrid products={productSlice} flags={flags} />
          {this.renderMoreButton()}
        </div>
      );
    } else if (layout === LIST_VIEW) {
      // We have to overwrite some flags here because of the design of the Product List.
      flags.name = true;
      flags.manufacturer = false;

      return (
        <div className={styles.listView}>
          <Headline text={headline} />
          <ProductList products={productSlice} flags={flags} />
          {this.renderMoreButton()}
        </div>
      );
    }

    return null;
  }
}

export default connect.widget.productList(ProductsWidget);
