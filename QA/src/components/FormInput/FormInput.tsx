import { useState } from "react";
import { question } from "../Data/Data";

export default function FormInput({ onAdd ,notify}: any) {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");

  const addNewitem = () => {
   if(qu===""||an===""){
     notify("من فضلك ادخل البيانات ","Error")
     return;
   }

    question.push({
      id: Date.now(),
      question: qu,
      answer: an,
    });

    setQu("");
    setAn("");

    onAdd();
    
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="flex flex-col md:flex-row w-full gap-3">

             <input
          type="text"
          onChange={(e) => setQu(e.target.value)}
          value={qu}
          placeholder="ادخل السؤال ؟"
          className=" bg-white px-3 py-2 w-full rounded-md shadow-lg focus:outline-fuchsia-600"
        />
<input
          type="text"
          onChange={(e) => setAn(e.target.value)}
          value={an}
          placeholder="ادخل الاجابة "
          className="w-full bg-white px-3 py-2 rounded-md shadow-lg focus:outline-fuchsia-600"
        />
          <button
          onClick={addNewitem}
          type="submit"
          className="w-full bg-fuchsia-600 md:w-[120px] cursor-pointer text-white py-2 rounded-md shadow-lg hover:bg-fuchsia-700 transition"
        >
          إضافة
        </button>

        </div>
       
      </div>

     
    </>
  );
}
