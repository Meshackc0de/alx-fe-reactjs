import {  useState } from "react";
// Counter component
function Counter() {
    const [count, setCount] = useState(0);
    return ( 
        <div>
            <button style ={{backgroundColor: 'blue', marginLeft: '8px'}} onClick={() => {
                setCount(count + 1)
            }}>Increment</button>
            <button style ={{backgroundColor: 'blue', marginLeft: '8px'}} onClick={() => {
                setCount(count - 1)
            }}>Decrement</button>
            <button style ={{backgroundColor: 'red', marginLeft: '8px'}}onClick ={() => {
                setCount(0)
            }}>Reset</button>
            <p>Count is: {count}</p>
        </div>
     );
}

export default Counter;