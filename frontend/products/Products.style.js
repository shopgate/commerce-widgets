import cxs from 'cxs';
import { colors } from 'Templates/styles';

const listView = cxs({
  background: colors.light,
  overflow: 'auto',
  '> ul > li:first-child': {
    paddingTop: 0,
  },
  '> ul > li:last-child': {
    paddingBottom: 0,
  },
});

export default {
  listView,
};
