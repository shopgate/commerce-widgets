import cxs from 'cxs';
import { colors, variables } from 'Templates/styles';

const container = cxs({
  background: colors.light,
});

const headline = cxs({
  fontSize: 18,
  padding: `${variables.gap.big}px 0 0`,
  marginTop: 0,
  textAlign: 'center',
});

export default {
  container,
  headline,
};
