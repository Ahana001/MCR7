import { useContext } from "react";
import "./SingleContryPage.css";
import { DataContext } from "../../Context/DataContext";
import { Link, useParams } from "react-router-dom";
export function SingleContryPage() {
  const { contry, continent, place } = useParams();
  const { state } = useContext(DataContext);
  if (!state?.data?.continents) {
    return <h2>Loarding...</h2>;
  }
  const findContinent = state.data.continents?.find((continentName) => {
    return continentName.name === continent;
  });
  const findContries = findContinent.countries.find(
    (countryName) => countryName.name === contry
  );
  const findPlace = findContries.destinations.find(
    (destination) => destination.name === place
  );
  return (
    <div className="SingleContryPageContainer">
      <h1>{findPlace.name}</h1>
      <div className="DetailsContainer">
        <img src={findPlace.image} alt={findPlace.name} />
        <div className="Details">
          <div>
            <span>Description:</span> {findPlace.description}
          </div>
          <div>
            <span>Ratings:</span> {findPlace.ratings}
          </div>
          <div>
            <span>Reviews:</span> {findPlace.reviews}
          </div>
          <div>
            <span>Location:</span> {findPlace.location}
          </div>
          <div>
            <span>Opening Hours: </span>
            {findPlace.openingHours}
          </div>
          <div>
            <span>Ticket Price: </span>
            {findPlace.ticketPrice}
          </div>
          <Link className="Link" to={findPlace.website}>
            Website
          </Link>
        </div>
      </div>
    </div>
  );
}
