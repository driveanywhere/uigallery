import * as React from 'react';

import {
  ShimmeredDetailsList ,
} from 'office-ui-fabric-react';

interface IObjectWithCustomStyles{
  customeStyles: any;
}

export const withLoadingShim = () =>
  (BaseComponent: React.ComponentClass<IObjectWithCustomStyles> | React.FunctionComponent<IObjectWithCustomStyles>) =>
    (props: any) => {
      const ListRenderer = props.isLoading ?
        (listProps: any) => (<ShimmeredDetailsList enableShimmer={true} {...listProps}/>) :
        props.ListRenderer;

      return (
        <BaseComponent
          {...props}
          ListRenderer={ListRenderer}
        />
      );
    };
