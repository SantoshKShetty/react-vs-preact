import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => setCount(count - 1);

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">Counter</Typography>
                <Typography paragraph>Count: {count}</Typography>
                <Button color="primary" variant="outlined" onClick={increment}>Increment</Button>&nbsp;&nbsp;
                <Button color="primary" variant="outlined" onClick={decrement} disabled={count === 0}>Decrement</Button>
            </CardContent>
        </Card>
    );
}