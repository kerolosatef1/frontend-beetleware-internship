import { useState } from "react";
import { question } from "../Data/Data";

export default function QAList({ deleteOneItems }: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dataLocal = JSON.parse(localStorage.getItem("items") || "[]");
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const onDeleteItem = (ID: number) => {
    if (localStorage.getItem("items") !== null) {
      const index = question.findIndex((item) => item.id === ID);

      question.splice(index, 1);
      deleteOneItems(question);
    }
  };

  return (
    <>
      <div className="mt-4 space-y-3 w-full">
        {localStorage.getItem("items") != null ? (
          dataLocal.map((item: any, index: number) => (
            <div
              key={item.id || index}
              className="border bg-white rounded-lg shadow"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center p-4 text-start cursor-pointer"
              >
                <div className="font-semibold text-gray-800">
                  {item.question}
                </div>

                <div
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </div>
              </button>

              {openIndex === index && (
                <>
                  <div className="px-4 pb-4 text-right text-sm text-gray-600">
                    {item.answer}
                     <button
                    onClick={() => onDeleteItem(item.id)}
                    className="bg-red-700 cursor-pointer text-white px-4 py-2 rounded-md m-5 hover:bg-red-500 transition "
                  >
                    حذف
                  </button>
                  </div>
                 
                </>
              )}
            </div>
          ))
        ) : (
          <h2 className="bg-red-500 text-2xl p-4 text-center text-white">
            لا يوجد بيانات
          </h2>
        )}
      </div>
    </>
  );
}
