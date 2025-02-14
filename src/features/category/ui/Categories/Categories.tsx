import s from "./Categories.module.scss";

interface CategoriesProps {
  categories: string[];
  handleCategoryChange: (newCategory: string) => void;
  currentCategory: string;
}

export const Categories = ({
  categories,
  handleCategoryChange,
  currentCategory,
}: CategoriesProps) => {
  return (
    <div className={s.categories}>
      <ul className={s.list}>
        {categories.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => handleCategoryChange(category)}
              className={currentCategory === category ? s.active : s.category}
              disabled={currentCategory === category}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
