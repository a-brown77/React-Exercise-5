import { cp } from "fs/promises";
import { useState } from "react";
import "./App.css";
import { Pet } from "./Pet";

export function ArraysEx() {
  const [colors, setColor] = useState(["red", "yellow", "blue"]);

  function addColor(color: string): void {
    let colorsCopy: string[] = colors;
    colorsCopy.push(color);
    setColor(colorsCopy);
  }

  const [pets, setPets] = useState<Pet[]>([
    { name: "Nova", type: "dog", id: 1 },
    { name: "Paisley", type: "cat", id: 2 },
    { name: "Presley", type: "cat", id: 3 },
  ]);

  return (
    <div>
      <ul>
        {colors.map((color: string) => (
          <li key={colors.indexOf(color)}>{color}</li>
        ))}
      </ul>
      <button onClick={() => addColor("green")}>Add Green</button>
      <button onClick={() => addColor("orange")}>Add Orange</button>
      <button onClick={() => addColor("purple")}>Add Purple</button>
    </div>
  );
}
