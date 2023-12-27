import { handleClientScriptLoad } from "next/script";
import { Dispatch, SetStateAction } from "react";
// const handleClick = (index) => {
//     console.log(`Hello World ${index}`);

//   }
type cellProps = {
  id: number;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  cell: string;
  winner: string;
};
const Cell = ({ go, setGo, id, cells, setCells, cell, winner}: cellProps) => {
   
  const handleClick = (e: any) => {
    if (winner){
        return
    }
    const notTaken = !cells[id];
    if (notTaken) {
      if (go === "cross") {
        handleCellChange("cross");
        setGo("circle");
      } else if (go === "circle") {
        handleCellChange("circle");
        setGo("cross");
      }
    }
  };
  const handleCellChange = (cellToChange: string) => {
    let copyCell = [...cells];
    copyCell[id] = cellToChange;
    setCells(copyCell);
  };
  return (<div className="square" onClick={handleClick}>
    <div className={cell}>{cell ? (cell === "cross" ? "X" : "O") : ""}</div>
  </div>);
};
export default Cell;
