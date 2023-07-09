import { useContext } from "react";
import "./HomePage.css";
import { DataContext } from "../../Context/DataContext";
import { List } from "../../Component/List/List";

export function HomePage() {
  const { state } = useContext(DataContext);
  if (!state?.data?.continents) {
    return <h2>Loarding...</h2>;
  }
  const continents = state.data.continents;

  return (
    <div className="HomePageContainer">
      <h1>Welcome To Trip Advisor</h1>
      <h2>Top Continents For Your Next Trip</h2>
      {<List list={continents} pre="continents" />}
    </div>
  );
}
