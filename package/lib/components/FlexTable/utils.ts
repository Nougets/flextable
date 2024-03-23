export function getPropIfExists(obj: any, prop: string) {
  if (obj[prop]) {
    return obj[prop];
  }
  return "";
}
