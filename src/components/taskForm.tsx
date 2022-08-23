import { useSelector } from "react-redux";
import { selectCount } from "../redux/reducers/counterSlice";

export const Form = () => {
    const count = useSelector(selectCount);
    return (
        <p>{ count}</p>
    )
}