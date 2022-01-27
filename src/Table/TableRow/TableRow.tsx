import { Pet } from "../../Pet";

export function TableRow(pet: Pet) {
  return (
    <tr>
      <td key={pet.name}>{pet.name}</td>
      <td key={pet.id}>{pet.id}</td>
      <td key={pet.type}>{pet.type}</td>
    </tr>
  );
}
