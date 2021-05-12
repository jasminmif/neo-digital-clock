import Row from "../Row/Row";
import twoDigitNum from "../util/twoDigitNum";

const SECONDS_1 = [0, 1, 2, 3, 4, 5];
const SECONDS_2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Seconds({ seconds }: { seconds: number }) {
    const [digit1, digit2] = twoDigitNum(seconds);
    
    return <>
        <Row items={SECONDS_1} value={digit1}/>
        <Row items={SECONDS_2} value={digit2}/>
    </>;
}
