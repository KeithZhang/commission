export type TStyles = Array<any>;

export default function YStyle(styles, rules) {
  const result = [];
  for (let key in rules) {
    const value = rules[key];
    if (value) {
      result.push(styles[key]);
    }
  }
  return result;
}
