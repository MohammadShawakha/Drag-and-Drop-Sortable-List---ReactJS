import { useRef, useState } from "react";
import "./App.css";
import SwapItem from "./swapItem/swapItem.jsx";

function App() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  const draged = useRef(0);
  const dragedOver = useRef(0);

  function handelSwap() {
    const tempList = [...list];

    const temp = tempList[draged.current];
    tempList[draged.current] = tempList[dragedOver.current];
    tempList[dragedOver.current] = temp;

    setList(tempList);
  }

  return (
    <>
      <div>
        <button onClick={() => setList([...list, list.length + 1])}>Add</button>
        {list.map((item, index) => (
          <SwapItem
            key={item}
            Contant={item}
            DragStart={() => (draged.current = index)}
            DragOver={() => (dragedOver.current = index)}
            Handel={handelSwap}
          ></SwapItem>
        ))}
      </div>
    </>
  );
}

export default App;
