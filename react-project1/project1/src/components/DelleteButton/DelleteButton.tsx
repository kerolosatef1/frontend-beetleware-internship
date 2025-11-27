import { useData } from "../Storedata/Storedata";

const DeleteButton = () => {
  const { resetItems } = useData();

  const handleDelete = () => {
    resetItems(); 
  };

  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 fustat-bold bg-red-500 text-white rounded hover:bg-red-600"
    >
      مسح البيانات
    </button>
  );
};

export default DeleteButton;
