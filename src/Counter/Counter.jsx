import {useSelector,useDispatch} from 'react-redux' ;
import { increment,decrement } from '../features/counter/counterSlice';


 const Counter = () => {
    //read data from the store

 const data = useSelector((state)=>state.counter.value)

 const dispatch = useDispatch()
 
   return (
     <div>
        <h1>{data}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
       
     </div>
   )
 }
 
 export default Counter
 
