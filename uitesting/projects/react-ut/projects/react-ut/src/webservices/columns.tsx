import * as React from 'react';

import { IColumn } from 'office-ui-fabric-react';

export const columns: (props: any) => IColumn[] = props => [
  {
    key: 'Description',
    name: window.LocalizedResources.webServiceGroupNameLabel,
    minWidth: 300,
    isResizable: true,
    onRender: (webservice) => {
      return (
        <a
          href={`#Workspaces/WebServiceGroups/WebServiceGroup/${webservice.Id}/dashboard`}
          title={webservice.Name}
          role="button"
        >
          {webservice.Name}
        </a>
      );
    },
  }, {
    name: window.LocalizedResources.webServiceGroupCreationTimeLabel,
    key: 'CreationTime',
    fieldName: 'CreationTime',
    minWidth: 150,
    isResizable: true,
  },
  {
    name: window.LocalizedResources.webServiceGroupDashboardWsLastUpdatedHeader,
    key: 'LastOperationStatusUpdatedTime',
    fieldName: 'LastOperationStatusUpdatedTime',
    minWidth: 300,
    isResizable: true,
  },
];
