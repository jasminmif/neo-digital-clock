import Row from "../Row/Row";
import twoDigitNum from "../util/twoDigitNum";

const MINUTES_1 = [0, 1, 2, 3, 4, 5];
const MINUTES_2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Minutes({ minutes }: { minutes: number }) {
    const [digit1, digit2] = twoDigitNum(minutes);
    
    return <>
        <Row items={MINUTES_1} value={digit1}/>
        <Row items={MINUTES_2} value={digit2}/>
    </>;
}
