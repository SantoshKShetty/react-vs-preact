import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => setCount(count - 1);

    return (
        <div>
            <div>
                <label paragraph>Count: {count}</label>
                <button onClick={increment}>Increment</button>&nbsp;&nbsp;
                <button onClick={decrement} disabled={count === 0}>Decrement</button>
            </div>
        </div>
    );
}