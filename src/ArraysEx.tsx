import { cp } from "fs/promises";
import { useState } from "react";
import { getEffectiveTypeParameterDeclarations } from "typescript";
import "./App.css";
import { Pet } from "./Pet";

export function ArraysEx() {
  const [colors, setColors] = useState(["red", "yellow", "blue"]);

  const [newColor, setNewColor] = useState("");

  const [pets, setPets] = useState<Pet[]>([
    { name: "Nova", type: "dog", id: 1 },
    { name: "Paisley", type: "cat", id: 2 },
    { name: "Presley", type: "cat", id: 3 },
  ]);

  function addColor(color: string) {
    setColors([...colors, color]);
  }

  function removePet(pet: Pet) {
    setPets(pets.filter((p) => p.id !== pet.id));
  }

  return (
    <div>
      <ol>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ol>
      <button onClick={() => addColor("green")}>Add Green</button>
      <button onClick={() => addColor("orange")}>Add Orange</button>
      <button onClick={() => addColor("purple")}>Add Purple</button>
      <input
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
        type="Text"
      ></input>
      <button onClick={() => addColor(newColor)}>Add Color</button>
      <table>
        <thead>
          <tr>
            <th>Name: </th>
            <th>Type: </th>
            <th>Id: </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        {pets.map((pet) => (
          <tr key={pet.id}>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
            <td>{pet.id}</td>
            <button onClick={() => removePet(pet)}>Delete</button>
          </tr>
        ))}
      </table>
    </div>
  );
}
