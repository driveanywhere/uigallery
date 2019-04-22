
import { BaseList } from '../base/base-list';
import { withColumns } from '../base/with-columns';
import { withCustomStyles } from '../base/with-custom-style';
import { withSelection } from '../base/with-selection';
import { withSearch } from '../base/with-search';
import { withLoadingShim } from '../base/with-loading-shim';
import { withNodataPlaceHolder } from '../base/with-nodata-placeholder';
import { enableSorting } from '../base/enable-sorting';
import { withSetData } from '../base/with-setdata';
import { compose } from '../base/utils';
import { columns } from './columns';

const customStyles = {
  panel: {
    width: '90%',
  },
};

const getFilter = (newSearchText: string) =>
  (item: any) => (
    item.Name.toLowerCase().indexOf(newSearchText.toLowerCase()) > -1
  );

export const WebServicesList = compose(
  enableSorting(),
  withLoadingShim(),
  withNodataPlaceHolder(),
  withSelection(),
  withSearch(getFilter),
  withCustomStyles(customStyles),
  withColumns(columns),
  withSetData(),
)(BaseList);
