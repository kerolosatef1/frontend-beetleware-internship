import type { StoreData } from "../Storedata/Storedata";


type Props = {
  item: StoreData;
};

const DataCard = ({ item }: Props) => {
  return <>
    <div className="p-4 bg-white shadow rounded-lg flex items-center gap-4">
      <img
        src={item.img}
        alt={item.name}
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div>
        <h3 className="text-lg almarai-bold  font-semibold">{item.name}</h3>
        <p className="text-gray-500 fustat-light  text-sm">{item.date}</p>
      </div>
    </div>
  </>
};

export default DataCard;
