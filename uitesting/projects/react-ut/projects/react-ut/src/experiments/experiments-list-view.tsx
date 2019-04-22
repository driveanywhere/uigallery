import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  ExperimentsList,
} from './experiments-list';

interface IExperimentsListOptions {
  el: HTMLDivElement;
  subscribeSelectionChanged(items: any[]): void;
  experiments: any[];
  placeHolderText: string;
  searchboxPlaceHolderText: string;
}

export class ExperimentsListView {
  private _options: IExperimentsListOptions;

  constructor(options: IExperimentsListOptions) {
    this._options = options;
  }

  public render(isLoading: boolean = false) {

    ReactDOM.render(
      (
      <ExperimentsList
        subscribeSelectionChanged={this._options.subscribeSelectionChanged}
        data={this._options.experiments}
        isLoading={isLoading}
        placeHolderText={this._options.placeHolderText}
        searchboxPlaceHolderText={this._options.searchboxPlaceHolderText}
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

  public refresh(experiments: any[], isLoading: boolean = false) {
    this._options.experiments = experiments;

    this.destory();
    this.render(isLoading);
  }
}
