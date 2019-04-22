import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  DatasetsList,
} from './datasets-list';

interface IDatasetsListOptions {
  el: HTMLDivElement;
  subscribeSelectionChanged(items: any[]): void;
  datasets: any[];
  placeHolderText: string;
  searchboxPlaceHolderText: string;
}

export class DatasetsListView {
  private _options: IDatasetsListOptions;

  constructor(options: IDatasetsListOptions) {
    this._options = options;
  }

  public render(isLoading: boolean = false) {

    ReactDOM.render(
      (
      <DatasetsList
        subscribeSelectionChanged={this._options.subscribeSelectionChanged}
        data={this._options.datasets}
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

  public refresh(datasets: any[], isLoading: boolean = false) {
    this._options.datasets = datasets;

    this.destory();
    this.render(isLoading);
  }
}
