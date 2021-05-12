import "./App.css";
import Divider from "./Divider/Divider";
import Hours from "./Hours/Hours";
import Minutes from "./Minutes/Minutes";
import Seconds from "./Seconds/Seconds";
import { useTime } from "./useTime";

export const CELL_HEIGHT = 40;

function App() {
  const { hours, minutes, seconds } = useTime(new Date('2021-05-12 11:59:41 AM'));

  return (
    <div className="container">
      <Hours hours={hours} />
      <Divider />
      <Minutes minutes={minutes} />
      <Divider />
      <Seconds seconds={seconds} />
    </div>
  );
}

export default App;
