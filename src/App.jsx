import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <>
      <h1 className="text-3xl text-red-400 btn">
        Total Coffees : {coffees.length}
      </h1>
      {coffees.map((coffee) => (
        <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        ></CoffeeCard>
      ))}
    </>
  );
}

export default App;
