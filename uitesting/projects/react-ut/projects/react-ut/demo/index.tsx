import * as _ from 'lodash';
import * as React from 'react';
import { render } from 'react-dom';
import { ExistingComputeTargetsDemo } from './existing-computes';

import './mocks';

import { ExperimentsListView } from '../src/index';


const root = document.createElement('div');
document.body.appendChild(root);

// experiments

// const experiments = _.map(_.range(15), (index: number) => ({
//   ExperimentId: index,
//   Creator: 'test',
//   StatusCode: 'NotStarted',
//   CreationTime: '2018/02/28',
//   Description: `test${index}`,
// }));

// const experimentsListView = new ExperimentsListView({
//   experiments: [],
//   subscribeSelectionChanged: (selections: any[]) => {
//     console.log(selections);
//   },
//   el: root,
//   placeHolderText: 'You don\'t have any experiment yet',
//   searchboxPlaceHolderText: 'Search experiment name or author',
// });

// experimentsListView.render(true);

// setTimeout(() => experimentsListView.refresh([]), 2000);

// setTimeout(() => experimentsListView.refresh(experiments), 4000);

// existing computes

render(<ExistingComputeTargetsDemo />, root);

