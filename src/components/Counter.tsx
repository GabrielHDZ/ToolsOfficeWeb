import React, { useState } from "react";
import type { RootState } from '../redux/store/store'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, selectCount } from "../redux/reducers/counterSlice";

interface Recived {
    inicial?: number;
}

const styleButton: React.CSSProperties = {
    background: "#202090",
    margin: "50px",
};
//memo
export function Counter({ inicial = 0 }: Recived) {
    const menu = useSelector((state: RootState) => state.counter.value)
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(inicial);

    return (
        <>
            <span>{menu}</span>
            <div>
                <button aria-label="Increment value" className="btn-small" onClick={() => dispatch(increment())}>
                    +
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" style={styleButton} onClick={() => dispatch(decrement())}>
                    -
                </button>
            </div>
            <div>
                <input aria-label="Set increment amount" value={incrementAmount} onChange={(e) => setIncrementAmount(12)} />
                <hr />
                <input type="text" pattern="[a-z]*" placeholder="insert your name" />
                <button className="btn-small" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
                    Add Amount
                </button>
            </div>
        </>
    );
}
