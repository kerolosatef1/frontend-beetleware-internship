interface CategoryProps {
  filtercategry: (cat: string) => void;
  allcategory: string[];
}

const Category = ({ filtercategry, allcategory }: CategoryProps) => {
  const onFilter = (cat: string) => {
    filtercategry(cat);
  };

  return (
    <section className="text-center mt-4 mb-5 flex justify-center flex-wrap gap-4">
      {allcategory.map((cat: string) => (
        <button key={cat} onClick={() => onFilter(cat)} className="category-btn">
          {cat}
        </button>
      ))}
    </section>
  );
};

export default Category;
