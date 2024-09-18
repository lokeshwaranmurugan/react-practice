import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../data/store";
import { selectCount, selectLoading, increment, decrement, incrementByInput, incrementAsync } from "../slices/CouterSlice";

const CounterPage = () => {
    const count = useSelector(selectCount);
    const isLoading = useSelector(selectLoading);
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div>
            <h2>{ isLoading? "Loading..." : count }</h2>
            <button onClick={() => dispatch(increment())}> ➕ </button>
            <button onClick={() => dispatch(decrement())}> ➖ </button>
            <button onClick={() => dispatch(incrementByInput(10))}> ➕ 10 </button>
            <button onClick={() => dispatch(incrementAsync(5))}> ➕ 5...</button>
        </div>
    )
}

export default CounterPage;