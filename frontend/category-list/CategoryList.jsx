import React, { Component, PropTypes } from 'react';
import connect from 'Library/connectors';
import { bin2hex } from 'Library/helpers/data';
import { Image } from 'Library/components';
import { List } from 'Templates/components';
import isEqual from 'lodash/isEqual';
import styles from './CategoryList.style';

/**
 * Core category list widget.
 * @param {Object} props The widget properties
 * @returns {JSX}
 */
export class CategoryListWidget extends Component {
  static propTypes = {
    settings: PropTypes.shape().isRequired,
    getCategory: PropTypes.func,
    items: PropTypes.arrayOf(
      PropTypes.shape()
    ),
  };

  static defaultProps = {
    getCategory: () => {},
    items: null,
  };

  /**
   * Get the category data once the component has mounted.
   */
  componentDidMount() {
    if (!this.props.items) {
      this.props.getCategory(this.props.settings.categoryNumber);
    }
  }

  /**
   * Only update when we have category items.
   * @param {Object} nextProps The next set of component props.
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps) {
    return (nextProps.items && !isEqual(this.props.items, nextProps.items));
  }

  /**
   * The render function.
   * @returns {JSX}
   */
  render() {
    const { items, settings } = this.props;

    if (!items) {
      return null;
    }

    return (
      <div className={styles.container}>
        {(settings.headline) ? <h3 className={styles.headline}>{settings.headline}</h3> : null}
        <List>
          {items.map((item) => {
            // We have to decode the link before using it.
            const link = `/category/${bin2hex(item.id)}`;

            // Only show an avatar if the setting `showImages` is true.
            const Avatar = (settings.showImages) ? <Image src={item.imageUrl} /> : null;

            return (
              <List.Item
                image={Avatar}
                link={link}
                key={item.id}
                title={item.name}
              />
            );
          })}
        </List>
      </div>
    );
  }
}

export default connect.widget.categoryList(CategoryListWidget);
