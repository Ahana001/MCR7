import { useContext } from "react";
import "./ContriesPage.css";
import { DataContext } from "../../Context/DataContext";
import { List } from "../../Component/List/List";
import { useParams } from "react-router-dom";

export function ContriesPage() {
  const { place } = useParams();
  const { state } = useContext(DataContext);
  if (!state?.data?.continents) {
    return <h2>Loarding...</h2>;
  }
  const continent = state.data.continents?.find((continentName) => {
    return continentName.name === place;
  });

  return (
    <div className="ContriesPageContainer">
      <h2>Top Contries in {place} For Your Next Trip</h2>
      {<List list={continent.countries} pre={`continents/${place}`} />}
    </div>
  );
}
