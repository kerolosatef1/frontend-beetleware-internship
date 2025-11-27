import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import image1 from "../../images/download (1).jpeg"
import image2 from "../../images/download.jpeg"

export type StoreData = {
  id: number;
  name: string;
  date: string;
  img: string;
  children?: ReactNode;
};
type DataContextType = {
  items: StoreData[];
  setItems: React.Dispatch<React.SetStateAction<StoreData[]>>;
  resetItems: () => void;
};

const person: StoreData[] = [
  {
    id: 1,
    name: "كيرلس عاطف فرج الله",
    date: "9 مساء",
    img: image1,
  },
  {
    id: 2,
    name: "علي محمد احمد",
    date: "11صباحا",
    img: image2,
  },
   {
    id: 3,
    name: "صلاح عبد الله محمد",
    date: "7مساء",
    img: image2,
  },
   {
    id: 3,
    name: "اندروا اباهيم",
    date: "2 صباحا",
    img: image2,
  },
   {
    id: 4,
    name: "اندروا ابراهيم",
    date: "1 صباحا",
    img: image2,
  },
  
];

const DataContext = createContext<DataContextType | null>(null);
//مرضتش اعملها ب any 😂 زي ما انت قولت في  ال typeScript
    const DataProvider = ({ children }: { children: ReactNode }) => {
    
    const [items, setItems] = useState<StoreData[]>([]);

  const resetItems = () => setItems([]);
  return (
    <DataContext.Provider value={{ items, setItems, resetItems }}>
      {children}
    </DataContext.Provider>
  );
};

 const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used inside DataProvider");
  return context;
};
export { person , useData ,DataProvider };