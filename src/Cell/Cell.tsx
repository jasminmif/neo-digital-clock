import React from 'react';
import { CELL_HEIGHT } from '../App';
import "./Cell.css";

interface ICell {
    children: React.ReactNode;
}

function Cell({children}: ICell) {
    return (
        <div className="cell" style={{height: CELL_HEIGHT, width: CELL_HEIGHT}}>
            {children}
        </div>
    )
}

export default Cell;