import cxs from 'cxs';
import { colors, variables } from 'Templates/styles';

const sliderContainer = cxs({
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'relative',
  paddingBottom: 8,
});

const slider = cxs({
  width: '100%',
  flex: 1,
  paddingTop: 16,
  paddingBottom: 16,
});

const sliderItem = cxs({
  width: '50%',
});

const productInfo = cxs({
  padding: 15,
});

const productName = cxs({
  fontWeight: 500,
});

const priceGrid = cxs({
  alignItems: 'flex-end',
});

const priceStrikedItem = cxs({
  flexGrow: 1,
});

const priceItem = cxs({
  flexGrow: 1,
  textAlign: 'right',
});

const priceBase = cxs({
  padding: '0 15px',
});

const priceStriked = cxs({
  ...priceBase,
  fontSize: '0.875rem',
});

const price = cxs({
  ...priceBase,
  color: colors.primary,
  fontSize: '1rem',
});

const card = cxs({
  background: '#FFF',
  height: '100%',
  margin: '0px 8px',
});

const headline = cxs({
  fontSize: 18,
  margin: `0 0 ${variables.gap.big}px`,
  textAlign: 'center',
});

export default {
  card,
  headline,
  sliderContainer,
  slider,
  sliderItem,
  productInfo,
  productName,
  priceGrid,
  priceStrikedItem,
  priceItem,
  priceBase,
  priceStriked,
  price,
};
