import { Card } from "../Card/Card";
import "./List.css";
export function List({ list, pre }) {
  return (
    <div className="ListContainer">
      {list.map((listItem) => {
        const key = "/" + pre + listItem.id;
        return (
          <Card
            key={key}
            place={listItem.name}
            image={listItem.image}
            pre={pre}
          />
        );
      })}
    </div>
  );
}
