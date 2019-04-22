import * as React from 'react';

import {
  IRenderFunction,
  IDetailsRowProps,
} from 'office-ui-fabric-react';

export const withCustomRow = (onRenderRow: (props: IDetailsRowProps) => JSX.Element) =>
  (BaseComponent: React.ComponentClass<any> | React.FunctionComponent<any>) =>
    (props: any) => (
      <BaseComponent {...props} onRenderRow={onRenderRow}/>
    );
