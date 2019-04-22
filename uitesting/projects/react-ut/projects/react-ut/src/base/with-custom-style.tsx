import * as React from 'react';

interface IObjectWithCustomStyles{
  customeStyles: any;
}

export const withCustomStyles = (styles: any) =>
  (BaseComponent: React.ComponentClass<IObjectWithCustomStyles> | React.FunctionComponent<IObjectWithCustomStyles>) =>
    (props: any) => {
      const customStyles = typeof styles === 'function' ?
        styles() :
        styles;

      return (
        <BaseComponent
          {...props}
          customStyles={customStyles}
        />
      );
    };
