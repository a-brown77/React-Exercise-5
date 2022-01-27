import { Pet } from "../Pet";
import { TableRow } from "./TableRow/TableRow";

export function Table(pets: Pet[]) {
  return (
    <table>
      {pets.map((pet: Pet) => {
        <TableRow pet={pet} />;
      })}
    </table>
  );
}
