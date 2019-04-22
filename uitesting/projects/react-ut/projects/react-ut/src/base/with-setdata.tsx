import * as React from 'react';

interface IObjectWithData<T = any> {
  data: T[];
  allData: T[];
  setData?(data: T[]): void;
}

export const withSetData = () =>
  (BaseComponent: React.ComponentClass<IObjectWithData> | React.FunctionComponent<IObjectWithData>) =>
    (props: IObjectWithData) => {
      const [data, setData] = React.useState<any[]>(props.data);

      return (
        <BaseComponent
          {...props}
          data={data}
          allData={props.data}
          setData={setData}
        />
      );
    };
