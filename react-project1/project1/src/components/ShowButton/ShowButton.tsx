import { useData, person } from "../Storedata/Storedata";

const ShowButton = () => {
  const { setItems } = useData();

  const handleShow = () => {
    setItems(person); 
  };

  return (
    <button
      onClick={handleShow}
      className="px-4 fustat-bold py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      عرض البيانات
    </button>
  );
};

export default ShowButton;
