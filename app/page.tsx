"use client";
import Image from "next/image";
import Cell from "./components/cell";
import { useEffect, useState } from "react";
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("cross");
  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");
      if (circleWins) {
        setWinner("circle");
      }
      if (crossWins) {
        setWinner("cross");
      }
    });
  });
  const [winner, setWinner] = useState("");
  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winner) {
      setWinner("draw");
    }
  }, [cells, winner]);


  return (
    <div className="containaer">
      <div className="">{`The winner is ${winner}`}</div>

      {!winner && <div className="">{`Its now turn of ${go}`}</div>}
      <div className="gameBorad">
        {cells.map((cell, index) => (
          <Cell
            go={go}
            setGo={setGo}
            key={index}
            id={index}
            cells={cells}
            setCells={setCells}
            cell={cell}
            winner={winner}
          />
        ))}
      </div>
    </div>
  );
}
