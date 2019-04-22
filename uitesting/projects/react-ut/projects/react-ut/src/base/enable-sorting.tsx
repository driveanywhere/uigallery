

import * as React from 'react';
import { IColumn } from 'office-ui-fabric-react';

function copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
  const key = columnKey as keyof T;
  return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
}

export const enableSorting = (sortableColumns: string[] = []) =>
  (BaseComponent: React.ComponentClass<any> | React.FunctionComponent<any>) =>
    (props: any) => {
      const isAllColumnsSortable:boolean = sortableColumns.length === 0;
      const initialColumns = props.columns.map((col: IColumn) => Object.assign({}, col, {
        isSorted: false,
        isSortedDescending: true,
      }));

      const [columns, setColumns] = React.useState<IColumn[]>(initialColumns);

      const onColumnClick = (ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
        if (!isAllColumnsSortable && sortableColumns.indexOf(column.key) === -1) {
          return;
        }

        const nextColumns = columns.map((col) => {
          if (col.key === column.key) {
            return Object.assign({}, col, {
              isSorted: true,
              isSortedDescending: !col.isSortedDescending,
            });
          }

          return Object.assign({}, col, {
            isSorted: false,
            isSortedDescending: true,
          });
        });

        setColumns(nextColumns);

        const nextData = copyAndSort<any>(props.data, column.fieldName!, !column.isSortedDescending);

        props.setData(nextData);
      };

      const columnsWithClickHandler = columns.map(col => Object.assign({}, col, {
        onColumnClick,
      }));

      return (
        <BaseComponent
          {...props}
          columns={columnsWithClickHandler}
        />
      );
    };
