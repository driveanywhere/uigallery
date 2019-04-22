/** Jest test setup file. */

const { configure } = require('enzyme');
const { initializeIcons } = require('@uifabric/icons');
const Adapter = require('enzyme-adapter-react-16');
const ReactDOM = require('react-dom');

window._ = require('lodash');

// Initialize icons.
initializeIcons('');

window.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

configure({ adapter: new Adapter() });

window.LocalizedResources = new Proxy({}, {
  get: (target, prop, receiver) => prop,
});
