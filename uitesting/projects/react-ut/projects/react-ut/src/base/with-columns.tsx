import * as React from 'react';
import {
  IColumn,
} from 'office-ui-fabric-react';

interface IObjectWithColumns{
  columns: IColumn[];
}

export const withColumns = (columns: ((parentProps: any) => IColumn[]) | IColumn[]) =>
  (BaseComponent: React.ComponentClass<IObjectWithColumns> | React.FunctionComponent<IObjectWithColumns>) =>
    (props: any) => {
      const finalColumns = typeof columns === 'function' ?
        columns(props) :
        columns;

      return (
        <BaseComponent
          {...props}
          columns={finalColumns}
        />
      );
    };
