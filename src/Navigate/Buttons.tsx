import { decrement, increment, resetCount } from '../store/slices/counter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface ButtonProps{
    value: number;
}

const Buttons = ({ value }: ButtonProps) => {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();


  return (
    <>
        <div className="btn-group p-3 mb-2 bg-black text-white" role="group" aria-label="Basic example">
          <button 
          type="button" 
          className="btn btn-primary"
          onClick={ () => dispatch(decrement(value))}
          disabled={count <= 0}
          >Previous</button>
          <button 
          type="button" 
          className="btn btn-primary"
          onClick={ () => dispatch(resetCount())}
          >First Page</button>
          <button 
          type="button" 
          className="btn btn-primary"
          onClick={ () => dispatch(increment(value))}
          >Next Page</button>
        </div>
    </>
  )
}

export default Buttons;