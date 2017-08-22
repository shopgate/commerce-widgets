import React, { PropTypes } from 'react';
import {
  CountdownTimer,
  Ellipsis,
  Link,
  Grid,
} from 'Library/components';
import { bin2hex } from 'Library/helpers/data';
import connect from 'Library/connectors';
import {
  Card,
  DiscountBadge,
  ImageSlider,
  Price,
  PriceStriked,
  ProductImage,
} from 'Templates/components';
import styles from './Liveshopping.style';

/**
 * Calculates the timeout from a set of live-shopping settings. The highest 'to' timestamp
 * with an active time period (that is a time span with from <= current time <= to) is
 * considered to represent the current timeout.
 * @param {Object} liveshoppings The live-shopping settings.
 * @returns {number} the unix timestamp for the timeout or null if there is no active timeout.
 */
const getLiveshoppingTimeout = (liveshoppings) => {
  const now = Date.now();

  const result = liveshoppings.reduce((best, item) => {
    // Get the time span limits.
    const from = new Date(item.from).getTime();
    const to = new Date(item.to).getTime();

    if (from <= now && to >= now) {
      // This time span is currently active.
      return Math.max(best, to);
    }

    return best;
  }, null);

  // Cut milliseconds from the result to make it a unix compatible timestamp.
  return Math.floor(result / 1000);
};

/**
 * Creates a new product slider item.
 * @param {Object} product The product.
 * @param {string} product.id The product id.
 * @param {string} product.name The product name.
 * @param {string} product.featuredImageUrl The featured image url.
 * @param {Object} product.price The product price object.
 * @param {number} timeout The timeout of the live-shopping deal.
 * @returns {JSX}
 */
const createProductSliderItem = ({ id, name, featuredImageUrl, price }, timeout) => {
  const priceStriked = price.unitPriceStriked > 0 ? price.unitPriceStriked : price.msrp;

  return (
    <div key={id} className={styles.card}>
      <Card>
        <Link href={`/item/${bin2hex(id)}`}>
          <Grid>
            <Grid.Item className={styles.imagePane}>
              <ProductImage src={featuredImageUrl} alt={name} />
            </Grid.Item>
            <Grid.Item className={styles.infoPane}>
              {price.discount > 0 ?
                <DiscountBadge
                  text="liveshopping.discount_badge"
                  discount={price.discount}
                  display="big"
                  className={styles.discountBadge}
                />
                : null
              }
              <Ellipsis
                rows={2}
                className={styles.cardTitle}
              >
                {name}
              </Ellipsis>
              {timeout ?
                <span className={styles.timer}>
                  <CountdownTimer timeout={timeout} />
                </span>
                : null
              }
              <div className={styles.priceWrapper}>
                <Grid className={styles.priceGrid}>
                  {priceStriked > 0 ?
                    <Grid.Item className={styles.priceStrikedItem}>
                      <PriceStriked
                        className={styles.priceStriked}
                        value={priceStriked}
                        currency={price.currency}
                      />
                    </Grid.Item>
                    : null
                  }
                  <Grid.Item className={styles.priceItem}>
                    <Price
                      className={priceStriked > 0 ? styles.price : ''}
                      unitPrice={price.unitPrice}
                      unitPriceMin={price.unitPriceMin}
                      currency={price.currency}
                    />
                  </Grid.Item>
                </Grid>
              </div>
            </Grid.Item>
          </Grid>
        </Link>
      </Card>
    </div>
  );
};

createProductSliderItem.propTypes = {
  featuredImageUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.shape().isRequired,
};

/**
 * The live shopping (deal of the day) widget.
 */
class LiveshoppingWidget extends React.Component {
  /**
   * Requests the liveshopping product data when the component is mounted.
   */
  componentDidMount() {
    this.props.getLiveshoppingProducts();
  }

  /**
   * Renders the component.
   * @return {JSX}
   */
  render() {
    const items = this.props.products.slice().map(
      product => createProductSliderItem(product, getLiveshoppingTimeout(product.liveshoppings))
    );

    if (!items.length) {
      return null;
    }

    return (
      <div className={styles.cardsWrapper}>
        <ImageSlider indicators loop classNames={{ indicator: styles.indicator }}>
          {items}
        </ImageSlider>
      </div>
    );
  }
}

LiveshoppingWidget.propTypes = {
  getLiveshoppingProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect.liveshopping(LiveshoppingWidget);
