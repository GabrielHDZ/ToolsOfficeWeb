import { useSelector } from "react-redux";
import { selectCount } from "../redux/reducers/counterSlice";

export const Form = () => {
    const count = useSelector(selectCount);
    return (
        <p className="text-lead"> data saved in counter reducer {count}</p>
    )
}