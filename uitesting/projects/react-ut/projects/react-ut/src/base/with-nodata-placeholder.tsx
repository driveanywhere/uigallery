import * as React from 'react';

export const withNodataPlaceHolder = () =>
(BaseComponent: React.ComponentClass<any> | React.FunctionComponent<any>) =>
  (props: any) => {
    const NodataText = () => (
      <div className="nodata-placeholder-text" key="nodata-placeholde">{props.placeHolderText}</div>
    );

    if (props.allData.length === 0 && !props.isLoading) {
      return (
        <BaseComponent
          {...props}
          headerBarItems={[]}
          ListRenderer={NodataText}
        />
      );
    }


    return (
      <BaseComponent
        {...props}
      />
    );
  };
