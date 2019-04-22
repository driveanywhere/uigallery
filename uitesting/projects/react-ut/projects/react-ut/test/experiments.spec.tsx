import 'jest';
import * as _ from 'lodash';
import * as React from 'react';
import { shallow, render, mount } from 'enzyme';

import { ExperimentsList } from '../src/experiments/experiments-list';

const getProps: (props?: {}) => {} = (props) => ({
  subscribeSelectionChanged: (selections: Array<{}>):void => {
    console.log(selections);
  },
  data: _.map(_.range(10), (index: number) => ({
    ExperimentId: index,
    Creator: 'test',
    StatusCode: 'NotStarted',
    CreationTime: '2018/02/28',
    Description: `test${index}`,
  })),
  isLoading: false,
})

describe('ListViews', () => {
  // test render

  describe('ExperimentsList', () => {
    it('renders correctly', () => {
      const wrapper = mount(
        <ExperimentsList
          {...getProps()}
        />,
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with empty data', () => {
      const wrapper = mount(
        <ExperimentsList
          {...getProps({
            data: [],
          })}
        />,
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly when loading', () => {
      const wrapper = mount(
        <ExperimentsList
          {...getProps({
            isLoading: true,
          })}
        />,
      );
      expect(wrapper).toMatchSnapshot();
    });

    // test interaction

    // test life cycle hooks
  })
});
