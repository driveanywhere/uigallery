import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  RunHistoryList,
} from './run-history-list';

interface IRunHistoryListOptions {
  el: HTMLDivElement;
  subscribeSelectionChanged(items: any[]): void;
  data: any[];
  placeHolderText: string;
  searchboxPlaceHolderText: string;
  navigateToExperiment(ExperimentId: string): void;
}

export class RunHistoryListView {
  private _options: IRunHistoryListOptions;
  private _onItemInvoked: (item: { ExperimentId: string }) => void;

  constructor(options: IRunHistoryListOptions) {
    this._options = options;

    this._onItemInvoked = (item: { ExperimentId: string }) => {
      this._options.navigateToExperiment.call(undefined, item.ExperimentId);
    };
  }

  public render(isLoading: boolean = false) {
    ReactDOM.render(
      (
      <RunHistoryList
        data={this._options.data}
        isLoading={isLoading}
        placeHolderText={this._options.placeHolderText}
        searchboxPlaceHolderText={this._options.searchboxPlaceHolderText}
        onItemInvoked={this._onItemInvoked}
      />
      ),
      this._options.el,
    );

    return this;
  }

  public destory() {
    ReactDOM.unmountComponentAtNode(this._options.el);

    return this;
  }

  public refresh(data: any[], isLoading: boolean = false) {
    this._options.data = data;

    this.destory();
    this.render(isLoading);
  }
}
