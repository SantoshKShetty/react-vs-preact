import { h } from 'preact';
import { useState } from 'preact/hooks';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => setCount(count - 1);

    return (
        <Card>
            <CardContent>
                <Typography variant='h4'>Count: {count}</Typography>
                <br/>
                <Button color='primary' variant='outlined' onClick={increment}>Increment</Button>&nbsp;&nbsp;
                <Button color='secondary' variant='outlined' disabled={count == 0} onClick={decrement}>Decrement</Button>
            </CardContent>
        </Card>
    );
}