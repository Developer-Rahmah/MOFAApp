export const getKeys = Object.keys as <T extends object>(
  obj: T
) => Array<keyof T>;
export type ValueOf<T> = T[keyof T];

export const randomId = () => Math.random().toString(36).slice(2);

export const areObjectsEqual = (
  object1: { [k: string]: any },
  object2: { [k: string]: any }
) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects =
      val1 && val2 && typeof val1 === "object" && typeof val2 === "object";
    if (
      (areObjects && !areObjectsEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
};
