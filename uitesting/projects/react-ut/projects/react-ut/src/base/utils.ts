export const compose = (...args: Function[]): Function => {
  return function (base: any) {
    return args.reduce((memo, curFn) => curFn(memo), base);
  };
};
