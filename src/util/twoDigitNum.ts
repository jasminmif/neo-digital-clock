export default function twoDigitNum(value: number) {
  if (value >= 10) {
    return Array.from(value.toString()).map(v => Number(v));
  } else {
    return [0, value];
  }
}
