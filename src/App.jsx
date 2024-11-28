import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./Components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <h1 className="text-3xl text-red-400 btn">
        Total Coffees : {coffees.length}
      </h1>
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
      ))}
    </>
  );
}

export default App;
