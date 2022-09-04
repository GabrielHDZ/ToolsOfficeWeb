import React, { useState } from "react";
import type { RootState } from '../redux/store/store'
import { useSelector, useDispatch } from "react-redux";

interface Recived {
    inicial?: number;
}

const styleButton: React.CSSProperties = {
    background: "#202090",
    margin: "50px",
};
//memo
export function Counter({ inicial = 0 }: Recived) {
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(inicial);

    return (
        <>
            <div>
                <button aria-label="Increment value" className="btn-small" >
                    +
                </button>
                <button aria-label="Decrement value" style={styleButton} >
                    -
                </button>
            </div>
            <div>
                <input aria-label="Set increment amount" value={incrementAmount} onChange={(e) => setIncrementAmount(12)} />
                <hr />
                <input type="text" pattern="[a-z]*" placeholder="insert your name" />
                <button className="btn-small" >
                    Add Amount
                </button>
            </div>
        </>
    );
}
