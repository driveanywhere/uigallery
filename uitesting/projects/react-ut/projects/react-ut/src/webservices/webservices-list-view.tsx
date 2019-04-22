import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  WebServicesList,
} from './webservices-list';

interface IWebServicesListOptions {
  el: HTMLDivElement;
  subscribeSelectionChanged(items: any[]): void;
  data: any[];
  placeHolderText: string;
  searchboxPlaceHolderText: string;
  navigateToWebservice(webServiceId: string): void;
}

export class WebServicesListView {
  private _options: IWebServicesListOptions;

  constructor(options: IWebServicesListOptions) {
    this._options = options;
  }

  public render(isLoading: boolean = false) {

    ReactDOM.render(
      (
      <WebServicesList
        subscribeSelectionChanged={this._options.subscribeSelectionChanged}
        data={this._options.data}
        isLoading={isLoading}
        placeHolderText={this._options.placeHolderText}
        searchboxPlaceHolderText={this._options.searchboxPlaceHolderText}
        navigateToWebservice={this._options.navigateToWebservice}
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
