import * as React from 'react';
import { hot } from 'react-hot-loader';
import * as _ from 'lodash';

import { ExistingComputeTargetsList } from '../src/computes/existing-computes-list';

const computes = _.map(_.range(15), (index: number) => ({
  name: `test ${index}`,
  id: index,
  vmSize: 2,
  currentNodeCount: 3,
  maxNodeCount: 5,
  location: 'test',
  provisioningState: index % 2 > 0 ? 'Succeeded' : 'Failed',
}));

const subscribeSelectionChanged = (items: any[]) => {
  console.log(items);
};

const Demo = () => {
  const [data, setData] = React.useState<any[]>(computes);

  return (
    <div>
      <ExistingComputeTargetsList
        data={data}
        isLoading={false}
        subscribeSelectionChanged={subscribeSelectionChanged}
        type="run"
        setData={setData}
        allData={data}
        placeHolderText="place holder"
        defaultSelectedId="1"
      />
    </div>
  );
};

export const ExistingComputeTargetsDemo = hot(module)(Demo);
