import * as React from 'react';
import {
  Stack,
} from 'office-ui-fabric-react';

import { SearchBox } from './searchbox';

declare global {
  // tslint:disable-next-line: naming-convention
  interface Window {
    LocalizedResources: any;
    _: any;
  }
}

// tslint:disable-next-line: naming-convention
const { _ } = window;


export const withSearch = (filterFn: Function) =>
  (BaseComponent: React.ComponentClass<any> | React.FunctionComponent<any>) =>
    (props: any) => {
      const [searchResultText, setSearchResultText] = React.useState<string>('');

      const onSearchTextChanged = _.debounce(
        (newSearchText: string) => {
          const data = props.allData.filter(filterFn(newSearchText));

          props.setData(data);

          if (data.length === 0 && props.allData.length !== 0) {
            setSearchResultText(window.LocalizedResources.NoSearchResultText);
          } else {
            setSearchResultText('');
          }
        },
        200);

      const searchBoxStyle = {
        root: {
          width: 300,
        },
      };

      const searchBox = (
        <Stack.Item key="search" align="end" styles={searchBoxStyle}>
          <SearchBox
            placeholder={props.searchboxPlaceHolderText}
            onChange={onSearchTextChanged}
          />
        </Stack.Item>
      );

      const headerBarItems = [
        searchBox,
        ...(!!props.headerBarItems ? props.headerBarItems : []),
      ];

      const onRenderDetailsFooter = () => (
        <div className="search-result-text">{searchResultText}</div>
      );

      return (
        <BaseComponent
          {...props}
          headerBarItems={headerBarItems}
          onRenderDetailsFooter={onRenderDetailsFooter}
        />
      );
    };
