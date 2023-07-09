import { Link } from "react-router-dom";
import "./Card.css";
import { HiLocationMarker } from "react-icons/hi";

export function Card({ image, place, pre }) {
  return (
    <Link className="CardContainer" to={`/${pre}/${place}`}>
      <img src={image} alt={place} />
      <div className="PlaceContainer">
        <HiLocationMarker className="LocationIcon" />
        <p>{place}</p>
      </div>
    </Link>
  );
}
