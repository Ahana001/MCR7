import { useContext } from "react";
import "./InnerContriesPage.css";
import { DataContext } from "../../Context/DataContext";
import { List } from "../../Component/List/List";
import { useParams } from "react-router-dom";

export function InnerContriesPage() {
  const { contry, continent } = useParams();
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
  return (
    <div className="InnerContriesPageContainer">
      <h2>Top Contries in {contry} For Your Next Trip</h2>
      {
        <List
          list={findContries.destinations}
          pre={`continents/${continent}/${contry}`}
        />
      }
    </div>
  );
}
