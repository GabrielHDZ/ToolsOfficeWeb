import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../redux/reducers/counterSlice";

import "../App.css";

interface Recived {
  inicial?: number;
}

const styleButton: React.CSSProperties = {
  background: "#202090",
  margin: "50px",
};
//memo
export function Counter({ inicial = 0 }: Recived) {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(inicial);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          className="button"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          style={styleButton}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(12)}
        />
        <input type="text" pattern="[a-z]*" placeholder="insert your name" />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
