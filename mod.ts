let seq = (fns: Array<((...args: any[]) => any)>, initial: any = undefined) =>
  fns.reduce(
    (a: Promise<any>, fn: ((...args: any[]) => any)) => a.then(fn),
    Promise.resolve(initial),
  );

export { seq };

