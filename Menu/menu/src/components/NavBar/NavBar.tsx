
import { useState } from "react";

interface NavBarProps {
  filterSearch: (word: string) => void;
}

const NavBar = ({ filterSearch }: NavBarProps) => {

  const [searchValue, setSearchValue] = useState("");

  const onSearch = () => {
    filterSearch(searchValue);
    setSearchValue("");
  };

  return (
    <header className="bg-gray-900 shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-xl font-semibold dark:text-white text-amber-600">مطعم جديد</span>
        <div className="hidden md:flex relative items-center gap-2">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-64 p-2 pl-3 text-sm rounded-lg border border-gray-300
                       bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600
                       focus:ring-blue-500 focus:border-blue-500"
            placeholder="ابحث.."
          />
          <button
            onClick={onSearch}
            className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 rounded-lg transition"
          >
            ابحث
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
