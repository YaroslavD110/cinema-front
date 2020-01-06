export function joinWith(
  arr: Array<JSX.Element | string>,
  sep: JSX.Element | string
) {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce((xs, x) => xs.concat([sep, x]), [arr[0]]);
}
