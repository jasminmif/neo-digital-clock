import React, { useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { CELL_HEIGHT } from "../App";
import Cell from "../Cell/Cell";
import "./Row.css";

interface IRow {
  items: number[];
  value: number;
}
function Row({ items, value }: IRow) {
  const nodeRef = useRef(null)
  return (
    <div
      className="row"
      style={{ transform: `translateY(-${value * CELL_HEIGHT}px)` }}
    >
      <SwitchTransition out-in>
        <CSSTransition nodeRef={nodeRef} classNames="magnifier-fade" timeout={400} key={value}>
          <div
            className="magnifier"
            ref={nodeRef}
            style={{ transform: `translateY(${value * CELL_HEIGHT}px)` }}
          ></div>
        </CSSTransition>
      </SwitchTransition>

      {items.map((i) => (
        <Cell key={i}>{i}</Cell>
      ))}
    </div>
  );
}

export default Row;
