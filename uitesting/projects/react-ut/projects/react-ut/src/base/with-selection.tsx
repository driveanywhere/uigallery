import * as React from 'react';
import {
  MarqueeSelection,
  DetailsList,
  Selection,
  ISelection,
  SelectionMode,
  Stack,
} from 'office-ui-fabric-react';

interface IObjectWithSelections{
  selection: ISelection;
  listRenderer(elem: React.ComponentElement<any, any>): React.ComponentElement<any, any>;
  headerBarItems: React.ComponentElement<any, any>[];
  selectionMode: SelectionMode;
}

interface ISelectableProps {
  allData: any[];
  data: any[];
  subscribeSelectionChanged(items: any[]): void;
  headerBarItems: React.ComponentElement<any, any>[];
  selection: ISelection;
  setSelectedCount: (count: number) => void;
}

const defaultGetSelection: (props: ISelectableProps) => ISelection = (props) => {
  const defaultSelection = new Selection({
    onSelectionChanged: () => {
      const selectedItems = defaultSelection.getSelection();

      props.setSelectedCount(selectedItems.length);
      props.subscribeSelectionChanged(selectedItems);
    },
    selectionMode: SelectionMode.multiple,
  });

  return defaultSelection;
};

export const withSelection = (getSelection: (props: ISelectableProps) => ISelection = defaultGetSelection) =>
  (BaseComponent: React.ComponentClass<IObjectWithSelections> | React.FunctionComponent<IObjectWithSelections>) =>
    (props: ISelectableProps) => {
      const [selectedCount, setSelectedCount] = React.useState<number>(0);

      const selection = getSelection({
        ...props,
        setSelectedCount,
      });

      const displayText = selectedCount > 0 ?
        window.LocalizedResources.RowSelectionCount.replace('{0}', selectedCount) :
        '';

      const selectedCountHeader = (
        <Stack.Item key="selected-count" grow={2} styles={{ root: { width: '500px' } }}>
          <div className="grid-searchbox-selectedcount">{displayText}</div>
        </Stack.Item>
      );

      const isSingleSelection = selection.mode === SelectionMode.single;

      const headerBarItems = [
        ...(!!props.headerBarItems ? props.headerBarItems : []),
        ...(isSingleSelection ? [] : [selectedCountHeader]),
      ];

      const ListRenderer = (listProps: any): React.ComponentElement<any, any> => (
        <MarqueeSelection selection={selection} isEnabled={!isSingleSelection}>
          <DetailsList
            {...listProps}
          />
        </MarqueeSelection>
      );

      return (
        <BaseComponent
          {...props}
          selection={selection}
          selectionMode={selection.mode}
          headerBarItems={headerBarItems}
          listRenderer={ListRenderer}
        />
      );
    };
