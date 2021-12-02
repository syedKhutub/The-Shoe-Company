import { SIZE } from '../../constants/sizes';
import { CATEGORIES } from '../../constants/catgeories';

export const FILTERLIST = [
  {
    filter_name: 'categories',
    options: CATEGORIES,
    filterLabel: 'Categories',
  },
  {
    filter_name: 'size',
    options: SIZE,
    filterLabel: 'Size',
  },
];