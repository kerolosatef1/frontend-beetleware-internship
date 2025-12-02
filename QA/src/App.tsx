import "./App.css";
import QAList from "./components/QAList/QAList";
import { question } from "./components/Data/Data";
import { useState } from "react";
import FormInput from "./components/FormInput/FormInput";
  import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [data, setData] = useState(
  JSON.parse(localStorage.getItem("items") || "[]")
);
  const addItem = () => {
    localStorage.setItem("items",JSON.stringify([...question]));
    setData([...question]);
    notify("تم الاضافة بنجاح..","Success")
  };

  const deleteAllItems = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length);
    setData([]);
    notify("تم حذف الكل  بنجاح..","Success")

  };

  const deleteOneItems = (items:any) => {
    localStorage.setItem("items",JSON.stringify([...items]));
    setData([...question]);
    notify("تم حذف السوال بنجاح...","Success")
    if(items.length<=0){
      deleteAllItems()
    }
    
  };

  const notify =(message:string,type:any)=>{
    if(type==="Error") {
    toast.error(message)}
  else if (type==="Success"){
    toast.success(message)
  }
  
    }  
  return (
    <>
      <div className="text-center min-h-screen w-full color-body almarai-regular">
        <div className="container p-5">
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
            <div className="text-xl lg:w-1/2">اسئلة واجوبة شائعة</div>
            <FormInput onAdd={addItem} notify={notify}/>
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
           <ToastContainer />
        </div>
      </div>
    </>
  );
}
export default App;