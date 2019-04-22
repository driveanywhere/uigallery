import * as React from 'react';

export const experimentsListColumns = () => [
  {
    key: 'Description',
    name: window.LocalizedResources.experimentGridHeaderName,
    minWidth: 200,
    isResizable: true,
    fieldName: 'Description',
    onRender: (experiment: any) => (
      <a
        href={`#Workspaces/Experiments/Experiment/${experiment.ExperimentId}/ViewExperiment`}
        title={experiment.Description}
        role="button"
      >
        {experiment.Description}
      </a>
    ),
  }, {
    name: window.LocalizedResources.experimentGridHeaderCreator,
    key: 'Creator',
    minWidth: 100,
    fieldName: 'Creator',
    isResizable: true,
  }, {
    name: window.LocalizedResources.experimentGridHeaderStatus,
    key: 'StatusCode',
    fieldName: 'StatusCode',
    isResizable: true,
    onRender: (experiment: any) => {
      const experimentStatusCodeMap = {
        NotStarted: 'Not Started',
        InDraft: 'Draft',
        Running: 'Running',
        Failed: 'Failed',
        Finished: 'Finished',
        Canceled: 'Canceled',
        Throttled: 'Throttled',
        Preparing: 'Preparing compute target', // MT not ready
      };

      return window._.result(experimentStatusCodeMap, experiment.StatusCode, experiment.StatusCode);
    },
    minWidth: 100,
  }, {
    name: window.LocalizedResources.experimentGridHeaderModificationTime,
    key: 'CreationTime',
    fieldName: 'CreationTime',
    onRender: (experiment: any) => (<span>{experiment.CreationTimeText}</span>),
    minWidth: 200,
    isResizable: true,
  },
];
