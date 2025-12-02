import type { Food } from "../Data/Data";

import { motion } from "framer-motion";

interface ItemListProps {
  foods: Food[];
}

const ItemList = ({ foods }: ItemListProps) => {
  return (
    <div className="w-full p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.length >= 1 ? (
          foods.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />

              <div className="p-4">
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                  <p className="text-sm text-red-500">
                    <span className="font-semibold">السعر : </span>
                    {item.price}
                  </p>
                </div>

                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">نوع الوجبة : </span>
                  {item.type}
                </p>

                <p className="text-sm text-gray-700">
                  <span className="font-semibold">المكونات : </span>
                  {item.description.join("، ")}
                </p>
              </div>
            </motion.div>
          ))
        ) : (
          <h3 className="text-red-600 text-center text-6xl">لا يوجد اصناف</h3>
        )}
      </div>
    </div>
  );
};

export default ItemList;
