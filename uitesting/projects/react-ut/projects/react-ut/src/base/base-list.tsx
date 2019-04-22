import * as React from 'react';

import {
  DetailsList,
  DetailsListLayoutMode,
  IDetailsListProps,
  SelectionMode,
  ConstrainMode,
  Sticky,
  StickyPositionType,
  ScrollablePane,
  ScrollbarVisibility,
  mergeStyleSets,
  Stack,
  IStyleSet,
  IDetailsFooterProps,
  DetailsRow,
} from 'office-ui-fabric-react';

declare global {
  // tslint:disable-next-line: naming-convention
  interface Window {
    LocalizedResources: any;
  }
}

export interface IBaseListProps extends IDetailsListProps {
  data: any[];
  customStyles: IStyleSet<{
    search?: any,
    panel?: any,
    wrapper?: any,
  }>;
  headerBarItems: React.ComponentElement<any, any>[];
  ListRenderer: (props: any) => React.ComponentElement<any, any>;
}

export const BaseList: React.FunctionComponent<IBaseListProps> =
(props: IBaseListProps) => {
  const classNames = mergeStyleSets(
    {
      wrapper: {
        height: '80vh',
        position: 'relative',
      },
      search: {
        textAlign: 'right',
        margin: 'auto',
      },
      panel: {

      },
    },
    props.customStyles);

  const shouldVirtualize = ({
    items = [],
  }: {
    items?: any[],
  }): boolean => {
    return items.length > 10;
  };

  const renderHeader = (headerProps: any, defaultRender: any) => {
    return (
      <Sticky
        stickyPosition={StickyPositionType.Header}
        isScrollSynced={true}
        stickyBackgroundColor="#fff"
      >
        <Stack horizontal={true} gap="10%" padding="s1 4px s1 0" reversed={true}>
          {props.headerBarItems}
        </Stack>
        <div>{defaultRender(headerProps)}</div>
      </Sticky>
    );
  };

  const {
    ListRenderer = DetailsList,
  } = props;

  const list = (
    <ListRenderer
      items={props.data}
      columns={props.columns}
      layoutMode={DetailsListLayoutMode.fixedColumns}
      isHeaderVisible={true}
      selection={props.selection}
      selectionMode={props.selectionMode ? props.selectionMode : SelectionMode.none}
      selectionPreservedOnEmptyClick={false}
      enterModalSelectionOnTouch={true}
      ariaLabelForSelectionColumn="Toggle selection"
      ariaLabelForSelectAllCheckbox="Toggle selection for all items"
      constrainMode={ConstrainMode.horizontalConstrained}
      onShouldVirtualize={shouldVirtualize}
      onRenderDetailsHeader={renderHeader}
      onRenderRow={props.onRenderRow}
      onRenderDetailsFooter={props.onRenderDetailsFooter}
      onItemInvoked={props.onItemInvoked}
    />
  );

  return (
    <div className={classNames.wrapper}>
      <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto} className={classNames.panel}>
        {list}
      </ScrollablePane>
    </div>
  );
};
