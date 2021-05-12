import Row from "../Row/Row";
import twoDigitNum from "../util/twoDigitNum";

const HOUR_1 = [0, 1];
const HOUR_2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Hours({ hours }: { hours: number }) {
    const [h1, h2] = twoDigitNum(hours);
    return <>
        <Row items={HOUR_1} value={h1}/>
        <Row items={HOUR_2} value={h2}/>
    </>;
}
