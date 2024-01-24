import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { RootState } from './store/store';
import { decrement, increment } from './store/slices/counter';

export const CounterApp = () => {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <>
            <span>{count}</span>

            <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment(1))}
            >
              Increment
            </button>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement(1))}
            >
              Decrement
            </button>
          </div>

        </>
      )
}
