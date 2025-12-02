import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import ItemList from "./components/ItemList/ItemList";
import { foods } from "./components/Data/Data";
import { useState } from "react";
function App() {
  const [items, setItems] = useState(foods);
  const allcategory=['الكل',...new Set(foods.map((item)=>item.type))]

  const filterCategory= (cat: string) => {
    if (cat === "الكل") {
      setItems(foods);
    } else {
      const newArr = foods.filter((item) => item.type === cat);
      setItems(newArr);
    }
  };

  const filterSearch= (word:string) => {
    if (word != "") {
    
      const newArr = foods.filter((item) => item.name === word);
      setItems(newArr);
    }
  };

  return (
    <div className="almarai-regular ">
      <NavBar filterSearch={filterSearch}/>
      <header className="container">
        <Header />

        <Category filtercategry={filterCategory} allcategory={allcategory} />
        <ItemList foods={items} />
      </header>
    </div>
  );
}

export default App;
