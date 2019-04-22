import * as React from 'react';
import {
  IColumn,
  IDetailsRowProps,
  DetailsRow,
  IDetailsRowStyles,
  Selection,
  ISelection,
  SelectionMode,
} from 'office-ui-fabric-react';

import { compose } from '../base/utils';
import { BaseList } from '../base/base-list';
import { withLoadingShim } from '../base/with-loading-shim';
import { withColumns } from '../base/with-columns';
import { withSelection } from '../base/with-selection';
import { withCustomStyles } from '../base/with-custom-style';
import { enableSorting } from '../base/enable-sorting';
import { withCustomRow } from '../base/with-custom-row';
import { withNodataPlaceHolder } from '../base/with-nodata-placeholder';

const getColumns = (props: any): IColumn[] => [
  {
    key: 'name',
    name: window.LocalizedResources.ComputeName,
    minWidth: 100,
    fieldName: 'name',
    isResizable: true,
  },
  (
    props.type === 'run' ?
    {
      key: 'nodes',
      name: window.LocalizedResources.CurrentNodeOfMaxNode,
      minWidth: 150,
      isResizable: true,
      onRender: (item: any) => {
        return <span >{item.idleNodeCount} / {item.maxNodeCount}</span>;
      },
    } :
    {
      key: 'nodes',
      name: window.LocalizedResources.ComputeNodeCount,
      minWidth: 100,
      isResizable: true,
      fieldName: 'nodeCount',
    }
  ),
  {
    key: 'location',
    name: window.LocalizedResources.location,
    minWidth: 90,
    isResizable: true,
    fieldName: 'location',
  },
  {
    key: 'status',
    name: window.LocalizedResources.status,
    minWidth: 90,
    isResizable: true,
    fieldName: 'provisioningState',
  },
];

const canSelectItem = (item: any) => item.provisioningState === 'Succeeded';

const getSelection = (props: any) => {
  const selection = new Selection({
    canSelectItem,
    getKey: (item: any) => {
      return item.id;
    },
    onSelectionChanged: () => {
      const selectedItems = selection.getSelection();

      props.subscribeSelectionChanged(selectedItems);
    },
    selectionMode: SelectionMode.single,
  });

  selection.setItems(props.allData);
  selection.setKeySelected(props.defaultSelectedId, true, false);

  return selection;
};


export const ExistingComputeTargetsList = compose(
  withCustomStyles({
    wrapper: {
      height: '379px',
    },
  }),
  enableSorting(),
  withCustomRow(
    (rowProps: IDetailsRowProps): JSX.Element => {
      const customStyle: Partial<IDetailsRowStyles> = {
        root: (rowProps && rowProps.item.provisioningState === 'Succeeded') ? {} : {
          color: '#aaa',
          cursor: 'not-allowed',
        },
      };
      return (<DetailsRow {...rowProps} styles={customStyle}/>);
    },
  ),
  withLoadingShim(),
  withSelection(getSelection),
  withColumns(getColumns),
  withNodataPlaceHolder(),
)(BaseList);
