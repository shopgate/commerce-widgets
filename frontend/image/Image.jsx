import React, { PropTypes } from 'react';
import { Image, Link } from 'Library/components';
import styles from './Image.style';

/**
 * The image widget.
 * @param {Object} props Props of the component
 * @returns {JSX}
 */
const ImageWidget = (props) => {
  let content = (
    <Image
      ratio={props.ratio}
      src={props.settings.image}
      alt={props.settings.alt}
    />
  );

  // Wrap a Link around the Image if needed.
  if (props.settings.link) {
    content = (
      <Link href={props.settings.link} className={styles}>
        {content}
      </Link>
    );
  }

  return content;
};

ImageWidget.propTypes = {
  settings: PropTypes.shape({
    alt: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default ImageWidget;
