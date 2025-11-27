import { DataProvider } from "./components/Storedata/Storedata";
import DataList from "./components/DataList/DataList";
import ShowButton from "./components/ShowButton/ShowButton";
import DeleteButton from "./components/DelleteButton/DelleteButton";
function App() {
  return (
    <DataProvider>
      <div className="min-h-screen bg-gray-100">
        <DataList/>
        <div className=" text-center flex  justify-center  gap-4 mb-6">
        <ShowButton />
          <DeleteButton />
          </div>
      </div>
    </DataProvider>
  );
}

export default App;
