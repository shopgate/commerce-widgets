import cxs from 'cxs';
import { colors, variables } from 'Templates/styles';

const cardsWrapper = cxs({
  padding: '16px 0px 0px',
});

const card = cxs({
  padding: '0px 10px',
});

const pane = {
  width: '50%',
  position: 'relative',
  background: colors.light,
};

const discountBadge = cxs({
  width: 'auto',
  fontWeight: 400,
  marginBottom: variables.gap.small,
  borderRadius: 3,
});

const imagePane = cxs({
  ...pane,
});

const infoPane = cxs({
  ...pane,
  padding: 16,
});

const priceWrapper = cxs({
  position: 'absolute',
  left: 15,
  bottom: 15,
  right: 15,
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
  fontSize: '1.25rem',
});

const cardTitle = cxs({
  fontWeight: 500,
  lineHeight: 1.25,
  marginBottom: variables.gap.small * 0.5,
});

const timer = cxs({
  fontSize: '0.875rem',
  color: colors.primary,
  fontStyle: 'italic',
  fontWeight: 500,
});

const indicator = {
  position: 'relative',
  left: 0,
  bottom: 0,
  transform: 'translateX(0)',
  textAlign: 'center',
};

export default {
  card,
  discountBadge,
  imagePane,
  infoPane,
  indicator,
  priceWrapper,
  priceGrid,
  priceStrikedItem,
  priceItem,
  priceStriked,
  price,
  cardsWrapper,
  cardTitle,
  timer,
};
