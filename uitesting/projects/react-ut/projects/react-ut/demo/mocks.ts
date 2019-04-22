window.LocalizedResources = new Proxy({}, {
  get: (target, prop, receiver) => prop,
});
