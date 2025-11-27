import { useData } from "../Storedata/Storedata";
import DataCard from "../Ui/Ui";

const DataList = () => {
  const { items } = useData();

  return (
    <div className="space-y-4 p-6">
      {items.map((item) => (
        <DataCard key={item.id} item={item} />
      ))}
    </div>
  );
};
export default DataList;