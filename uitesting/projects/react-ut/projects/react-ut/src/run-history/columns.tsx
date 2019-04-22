import {
  IColumn,
} from 'office-ui-fabric-react';
import * as React from 'react';

export const runHistoryColumns = (): IColumn[] => [
  {
    key: 'Description',
    name: window.LocalizedResources.name,
    fieldName: 'Description',
    minWidth: 250,
    isResizable: true,
    onRender: (item: { ExperimentId: string, Description: string }) => {
      return (
        <a
          href={`#Workspaces/Experiments/Experiment/${item.ExperimentId}/ViewExperiment`}
          title={item.Description}
          role="button"
        >
          {item.Description}
        </a>
      );
    },
  },
  {
    key: 'State',
    name: window.LocalizedResources.state,
    fieldName: 'State',
    minWidth: 150,
    isResizable: true,
  },
  {
    key: 'StatusCode',
    name: window.LocalizedResources.status,
    fieldName: 'StatusCode',
    minWidth: 150,
    isResizable: true,
  },
  {
    key: 'StartTime',
    name: window.LocalizedResources.experimentGridHeaderStartTime,
    fieldName: 'StartTime',
    minWidth: 150,
    isResizable: true,
  },
  {
    key: 'EndTime',
    name: window.LocalizedResources.experimentGridHeaderEndTime,
    fieldName: 'EndTime',
    minWidth: 150,
    isResizable: true,
  },
];
