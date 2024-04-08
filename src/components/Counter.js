import React from "react";
import { Button } from "antd";

function Counter ({value, onIncrement, onDecrement}){
    return (
        <div>
            <p>{value}</p>
            <Button onClick={onIncrement}>Add</Button>
            <Button onClick={onDecrement}>Minus</Button>
        </div>
    )
}

export default Counter;