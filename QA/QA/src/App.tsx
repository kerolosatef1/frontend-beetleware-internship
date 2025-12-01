import "./App.css";
import QAList from "./components/QAList/QAList";
import { question } from "./components/Data/Data";
import { useState } from "react";
import FormInput from "./components/FormInput/FormInput";

function App() {
  const [data, setData] = useState(question);

  const addItem = () => {
    localStorage.setItem("items",JSON.stringify([...question]));
    setData([...question]);
  };

  const deleteAllItems = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length);
    setData([]);
  };

  const deleteOneItems = (items:any) => {
    localStorage.setItem("items",JSON.stringify([...items]));
    setData([...question]);
  };

  return (
    <>
      <div className="text-center min-h-screen w-full color-body almarai-regular">
        <div className="container p-5">
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
            <div className="text-xl lg:w-1/2">اسئلة واجوبة شائعة</div>
            <FormInput onAdd={addItem} />
          </div>

          <QAList data={data} deleteOneItems={deleteOneItems} />

          {data.length >= 1 ? (
            <button
              className="bg-red-700 text-white px-6 py-2 rounded-md mt-5 hover:bg-red-500 transition"
              onClick={deleteAllItems}
            >
              مسح الكل
            </button>
          ):null}
        </div>
      </div>
    </>
  );
}

export default App;
